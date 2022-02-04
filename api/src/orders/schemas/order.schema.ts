import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, type: Date })
  createdDate: Date;

  @Prop({ required: true, type: Date })
  updatedDate: Date;

  @Prop({ required: true, type: Number })
  status: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  mailName: string;

  @Prop({ required: true })
  street1: string;

  @Prop()
  street2: string;

  @Prop()
  state?: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  zip: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  cart: [{ productName: string; signatureName: string }];

  @Prop()
  shippingPrice?: number;

  @Prop()
  productsPrice?: number;

  @Prop()
  otherRequests?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
