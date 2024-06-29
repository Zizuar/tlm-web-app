import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly eventName: string;

  @IsString()
  @IsNotEmpty()
  readonly town: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsOptional()
  @IsString()
  readonly link?: string;

  @IsString()
  @IsNotEmpty()
  readonly timezone: string;

  @IsNumber()
  @IsNotEmpty()
  readonly startHour: number;

  @IsNumber()
  @IsNotEmpty()
  readonly startMinute: number;

  @IsNumber()
  @IsOptional()
  readonly endHour: number;

  @IsNumber()
  @IsOptional()
  readonly endMinute: number;
}
