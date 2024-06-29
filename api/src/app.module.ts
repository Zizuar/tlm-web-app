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
import { ScheduleModule } from './schedule/schedule.module';
import { AuthzModule } from './authz/authz.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { VenuesModule } from './venues/venues.module';

@Module({
  imports: [
    ServicesModule,
    EventsModule,
    ReleasesModule,
    OrdersModule,
    PressReleasesModule,
    ProductsModule,
    ScheduleModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      retryWrites: true,
      w: 'majority',
    }),
    AuthzModule,
    UsersModule,
    VenuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
