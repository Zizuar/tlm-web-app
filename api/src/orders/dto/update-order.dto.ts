import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus } from '../interfaces/order-status.interface';
import { IsDate, IsInt, Max, Min } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsDate()
  createdDate: Date;

  @IsDate()
  updatedDate: Date;

  @IsInt()
  @Min(0)
  @Max(4)
  status: OrderStatus;
}
