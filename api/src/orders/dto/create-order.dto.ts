export class CreateOrderDto {
  readonly email: string;
  readonly mailName: string;
  readonly street1: string;
  readonly street2: string;
  readonly state?: string;
  readonly zip: string;
  readonly country: string;
  readonly cart: [
    { productName: string; signatureName: string; price: number },
  ];
  readonly otherRequests?: string;
}
