export interface NewProduct {
  name: string;
  description: string;
  price: number;
  signable: boolean;
  spotifyLink?: string;
  preOrderDate?: Date;
  promo?: string;
}

export interface Product extends NewProduct {
  _id: string;
  createdAt: Date;
}
