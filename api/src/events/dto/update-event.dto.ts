import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsDate, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @IsMongoId()
  readonly _id: string;

  @IsDate()
  @Type(() => Date)
  readonly createdAt: Date;
}
