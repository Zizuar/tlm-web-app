import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ReleasesModule } from './releases/releases.module';
import { OrdersModule } from './orders/orders.module';
import { PressReleasesModule } from './press-releases/press-releases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EventsModule,
    ReleasesModule,
    OrdersModule,
    PressReleasesModule,
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
