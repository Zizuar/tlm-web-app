import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { EmailService, EmailTemplates } from '../services/email.service';
import { OrderStatus } from './interfaces/order-status.interface';
import { validate } from 'class-validator';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    @InjectConnection() private readonly connection: Connection,
    private readonly emailService: EmailService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order | HttpException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newOrder = new this.orderModel({
        ...createOrderDto,
        createdDate: new Date(),
        updatedDate: new Date(),
        orderStatus: OrderStatus.CREATED,
        shippingPrice: OrdersService.calculateShipping(createOrderDto.country),
        productsPrice: this.calculateProductsPrice(createOrderDto.cart),
      });
      const errors = await validate(newOrder);
      if (errors.length > 0) {
        return new BadRequestException(errors, 'Invalid value(s) in request');
      }
      await newOrder.save();
      await session.commitTransaction();
      console.log('New order added!');
      await this.emailService.sendEmailTemplate(EmailTemplates.ORDER_ADDED, process.env.TYLER_EMAIL, 'Tyler Levs');
      await this.emailService.sendEmailTemplate(EmailTemplates.SUCCESSFUL_ORDER, newOrder.email, newOrder.mailName);
      return newOrder;
    } catch (error) {
      console.error(error);
      await session.abortTransaction();
      await session.endSession();
      throw error;
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
      updatedDate: new Date(),
      shippingPrice: OrdersService.calculateShipping(updateOrderDto.country),
      productsPrice: this.calculateProductsPrice(updateOrderDto.cart),
    };

    const errors = await validate(updatedOrder);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }
    return await this.orderModel
      .findByIdAndUpdate(id, updatedOrder, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<Order> {
    return await this.orderModel.findByIdAndDelete(id).exec();
  }

  private calculateProductsPrice(cart) {
    const discount = 0;
    let productsPrice = 0;
    cart.forEach((cartItem) => {
      productsPrice += cartItem.price ? cartItem.price : 0;
    });
    return productsPrice - discount;
  }

  private static calculateShipping(country) {
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
    return country === 'Canada' ? 10 : domesticShippingCountries.includes(country) ? 7 : 15;
  }
}
