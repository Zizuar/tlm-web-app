import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus } from '../interfaces/order-status.interface';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  createdDate: Date;
  updatedDate: Date;
  status: OrderStatus;
}
