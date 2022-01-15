import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  UseGuards,
  NotImplementedException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { RecaptchaGuard } from './guards/recaptcha.guard';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../authz/decorators/permissions.decorator';
import { PermissionsGuard } from '../authz/guards/permissions.guard';

@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(RecaptchaGuard)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return await this.ordersService.create(createOrderDto);
    } catch (e) {
      throw new HttpException(e.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get()
  @Permissions('read:orders')
  findAll() {
    throw new NotImplementedException();
    // return this.ordersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get(':id')
  @Permissions('read:orders')
  findOne(@Param('id') id: string) {
    throw new NotImplementedException();
    // return this.ordersService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Patch(':id')
  @Permissions('update:orders')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    throw new NotImplementedException();
    // return this.ordersService.update(id, updateOrderDto);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('remove:orders')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
    // return this.ordersService.remove(id);
  }
}
