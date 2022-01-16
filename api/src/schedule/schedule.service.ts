import { Injectable } from '@nestjs/common';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScheduleDay } from './schemas/schedule-day.schema';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleDay.name)
    private readonly scheduleDayModel: Model<ScheduleDay>,
  ) {}

  async findAll(): Promise<ScheduleDay[]> {
    return await this.scheduleDayModel.find().exec();
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleDayModel.findByIdAndUpdate(id, updateScheduleDto);
  }
}
