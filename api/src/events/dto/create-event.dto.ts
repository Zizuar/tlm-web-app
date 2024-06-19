import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly date: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
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

  @IsOptional()
  @IsString()
  readonly timezone?: string;
}
