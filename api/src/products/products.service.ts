import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schemas';
import { validate } from 'class-validator';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product | HttpException> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const newProduct = new this.productModel({
        ...createProductDto,
        createdAt: new Date(),
      });

      const errors = await validate(newProduct);
      if (errors.length > 0) {
        return new BadRequestException(errors, 'Invalid value(s) in request');
      }

      await newProduct.save();
      await session.commitTransaction();
      console.log('New product added');
      return newProduct;
    } catch (error) {
      console.error(error);
      await session.abortTransaction();
      await session.endSession();
      throw error;
    }
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = {
      ...updateProductDto,
    };

    const errors = await validate(updatedProduct);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }

    return await this.productModel.findByIdAndUpdate(id, updatedProduct, { new: true }).exec();
  }

  async remove(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
