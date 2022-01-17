export interface NewOrder {
  createdDate: Date;
  email: string;
  mailName: string;
  street1: string;
  street2?: string;
  city: string;
  zip: string;
  state?: string;
  country: string;
  other?: string;
  productsPrice: number;
  shippingPrice: number;
  cart: [{
    productName: string;
    signatureName: string;
    price: number;
  }]
}

export interface ExistingOrder {
  _id: string;
  createdDate: Date;
  status: OrderStatus;
  email: string;
  mailName: string;
  street1: string;
  street2?: string;
  city: string;
  zip: string;
  state?: string;
  country: string;
  other?: string;
  productsPrice: number;
  shippingPrice: number;
  cart: [{
    productName: string;
    signatureName: string;
    price: number;
  }]
}

export enum OrderStatus {
  CREATED,
  INVOICE_SENT,
  PAID,
  SHIPPED,
  ABANDONED
}
