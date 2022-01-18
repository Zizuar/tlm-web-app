import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduleDto } from './create-schedule.dto';
import { IsMongoId } from 'class-validator';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
  @IsMongoId()
  _id: string;
}
