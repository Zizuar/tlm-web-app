import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { EmailService, EmailTemplates } from '../services/email.service';
import { OrderStatus } from './interfaces/order-status.interface';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    @InjectConnection() private readonly connection: Connection,
    private readonly emailService: EmailService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newOrder = new this.orderModel({
        ...createOrderDto,
        createdDate: Date.now(),
        updatedDate: Date.now(),
        orderStatus: OrderStatus.CREATED,
        shippingPrice: this.calculateShipping(createOrderDto.country),
        productsPrice: this.calculateProductsPrice(createOrderDto.cart),
      });
      await newOrder.save();
      await session.commitTransaction();
      await console.log('New order added!');
      await this.emailService.sendEmailTemplate(
        EmailTemplates.ORDER_ADDED,
        process.env.TYLER_EMAIL,
        'Tyler Levs',
      );
      await this.emailService.sendEmailTemplate(
        EmailTemplates.SUCCESSFUL_ORDER,
        newOrder.email,
        newOrder.mailName,
      );
      return newOrder;
    } catch (error) {
      console.error(error);
      await session.abortTransaction();
      await session.endSession();
      return Promise.reject(error.toString());
    }
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id).exec();
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const updatedOrder = {
      ...updateOrderDto,
      updatedDate: Date.now(),
    };
    return await this.orderModel
      .findByIdAndUpdate(id, updatedOrder, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return await this.orderModel.findByIdAndRemove(id).exec();
  }

  private calculateShipping(country) {
    const domesticShippingCountries = [
      'United States of America',
      'American Samoa',
      'Guam',
      'Marshall Islands',
      'Micronesia (Federated States of)',
      'Northern Mariana Islands',
      'Palau',
      'Puerto Rico',
      'United States Minor Outlying Islands',
      'Virgin Islands (U.S.)',
    ];
    return country === 'Canada'
      ? 10
      : domesticShippingCountries.includes(country)
      ? 7
      : 15;
  }

  private calculateProductsPrice(cart) {
    const discount =
      cart.find(
        (cartItem) => cartItem.productName === 'Songs for Being Alone CD',
      ) &&
      cart.find(
        (cartItem) => cartItem.productName === 'Tyler Levs EP (2019) CD',
      )
        ? 500
        : 0;
    let productsPrice = 0;
    cart.forEach((cartItem) => {
      productsPrice += cartItem.price ? cartItem.price : 0;
    });
    return (productsPrice - discount) / 100;
  }
}
