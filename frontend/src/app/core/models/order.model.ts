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
  otherRequests?: string;
  productsPrice: number;
  shippingPrice: number;
  cart: {
    productName: string;
    signatureName: string;
    price: number;
  }[];
}

export interface ExistingOrder extends NewOrder {
  _id: string;
  createdDate: Date;
  status: OrderStatus;
}

export enum OrderStatus {
  CREATED,
  INVOICE_SENT,
  PAID,
  SHIPPED,
  ABANDONED,
  ARCHIVED,
}
