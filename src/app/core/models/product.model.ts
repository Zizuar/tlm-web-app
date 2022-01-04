export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  signable: boolean;
  spotifyLink?: string;
  preOrderDate?: Date;
  promo?: string;
}
