import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  signable: boolean;

  @Prop()
  spotifyLink: string;

  @Prop()
  promo: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
