import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueDto } from './create-venue.dto';
import { IsDate, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateVenueDto extends PartialType(CreateVenueDto) {
  @IsMongoId()
  readonly _id: string;

  @IsDate()
  @Type(() => Date)
  readonly createdAt: Date;
}
