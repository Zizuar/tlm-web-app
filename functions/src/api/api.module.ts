import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { ReleasesModule } from './releases/releases.module';
import { OrdersModule } from './orders/orders.module';
import { PressReleasesModule } from './press-releases/press-releases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CONFIG, ENVIRONMENT } from '../config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    EventsModule,
    ReleasesModule,
    OrdersModule,
    PressReleasesModule,
    MongooseModule.forRoot(
      ENVIRONMENT.production === 'true'
        ? CONFIG.database_url
        : CONFIG.database_url_dev,
    ),
    ProductsModule,
  ],
})
export class ApiModule {}
