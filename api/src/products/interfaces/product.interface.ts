import { Document } from 'mongoose';

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  signable: boolean;
  spotifyLink?: string;
  promo?: string;
}
