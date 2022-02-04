import {
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  Max,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsInt()
  @Min(0)
  @Max(10000)
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
