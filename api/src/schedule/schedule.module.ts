import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleDay, ScheduleDaySchema } from './schemas/schedule-day.schema';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [
    MongooseModule.forFeature([
      { name: ScheduleDay.name, schema: ScheduleDaySchema },
    ]),
  ],
})
export class ScheduleModule {}
