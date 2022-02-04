import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly mailName: string;

  @IsString()
  @IsNotEmpty()
  readonly street1: string;

  @IsOptional()
  @IsString()
  readonly street2?: string;

  @IsOptional()
  @IsString()
  readonly state?: string;

  @IsString()
  @IsNotEmpty()
  readonly zip: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly country: string;

  readonly cart: [
    { productName: string; signatureName: string; price: number },
  ];

  @IsOptional()
  @IsString()
  readonly otherRequests?: string;
}
