import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
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

  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  async findAll(): Promise<ScheduleDay[]> {
    return await this.scheduleDayModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
