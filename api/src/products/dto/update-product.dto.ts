import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsDate, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsMongoId()
  readonly _id: string;

  @IsDate()
  @Type(() => Date)
  readonly createdAt: Date;
}
