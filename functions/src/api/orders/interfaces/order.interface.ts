import { Document } from 'mongoose';

export interface Order extends Document {
  readonly createdDate: Date;
  readonly email: string;
  readonly mailName: string;
  readonly street1: string;
  readonly street2: string;
  readonly state: string;
  readonly zip: string;
  readonly country: string;
  readonly cart: [{ productName: string; signatureName: string }];
  readonly shippingPrice: number;
  readonly productsPrice: number;
  readonly otherRequests: string;
}
