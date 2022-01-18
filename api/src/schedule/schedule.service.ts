import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScheduleDay } from './schemas/schedule-day.schema';
import { validate } from 'class-validator';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleDay.name)
    private readonly scheduleDayModel: Model<ScheduleDay>,
  ) {}

  async findAll(): Promise<ScheduleDay[]> {
    return await this.scheduleDayModel.find().exec();
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    const updatedSchedule = {
      ...updateScheduleDto,
    };
    const errors = await validate(updatedSchedule);
    if (errors.length > 0) {
      throw new BadRequestException(errors, 'Invalid value(s) in request');
    }
    return this.scheduleDayModel.findByIdAndUpdate(id, updatedSchedule);
  }
}
