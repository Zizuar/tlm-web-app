import { IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  @Min(1)
  @Max(7)
  dayId: number;

  @IsString()
  day: string;

  @IsString()
  dayShort: string;

  @IsString()
  contentLong: string;

  @IsString()
  contentShort: string;

  @IsBoolean()
  contentFlexible: boolean;

  @IsBoolean()
  isOff: boolean;

  @IsString()
  startHour?: string;

  @IsString()
  startAMPM?: string;

  @IsBoolean()
  startFlexible?: boolean;

  @IsString()
  endHour?: string;

  @IsString()
  endAMPM?: string;
}
