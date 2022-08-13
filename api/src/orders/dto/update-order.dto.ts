import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus } from '../interfaces/order-status.interface';
import { IsDate, IsInt, IsMongoId, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsMongoId()
  _id: string;

  @IsDate()
  @Type(() => Date)
  createdDate: Date;

  @IsDate()
  @Type(() => Date)
  updatedDate: Date = new Date();

  @IsInt()
  @Min(0)
  @Max(5)
  status: OrderStatus;
}
