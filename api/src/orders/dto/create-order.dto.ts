import { IsEmail, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly mailName: string;

  @IsString()
  readonly street1: string;

  @IsString()
  readonly street2?: string;

  @IsString()
  readonly state?: string;

  @IsString()
  readonly zip: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly country: string;

  readonly cart: [
    { productName: string; signatureName: string; price: number },
  ];

  @IsString()
  readonly otherRequests?: string;
}
