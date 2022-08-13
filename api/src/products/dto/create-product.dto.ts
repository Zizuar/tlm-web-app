import { IsNotEmpty, IsString, Min, Max, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @Min(0)
  @Max(500)
  price: number;

  @IsBoolean()
  signable: boolean;

  @IsOptional()
  @IsString()
  spotifyLink?: string;

  @IsOptional()
  @IsString()
  promo?: string;
}
