import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { ReleasesModule } from './releases/releases.module';
import { OrdersModule } from './orders/orders.module';
import { PressReleasesModule } from './press-releases/press-releases.module';

@Module({
  imports: [EventsModule, ReleasesModule, OrdersModule, PressReleasesModule],
})
export class ApiModule {}
