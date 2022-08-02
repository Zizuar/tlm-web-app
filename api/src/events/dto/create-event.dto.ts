import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly date: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly endDate: Date;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly venue: string;

  @IsString()
  @IsNotEmpty()
  readonly town: string;

  @IsOptional()
  @IsString()
  readonly venueLink?: string;

  @IsOptional()
  @IsString()
  readonly fbEventLink?: string;
}
