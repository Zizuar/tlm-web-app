export interface Order {
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
