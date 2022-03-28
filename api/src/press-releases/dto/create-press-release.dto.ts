import {
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePressReleaseDto {
  @IsString()
  @IsNotEmpty()
  songId: string;

  @IsString()
  @IsNotEmpty()
  imgName: string;

  @IsNotEmptyObject()
  dateStamp: {
    place: string;
    date: string;
  };

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  releaseAfter: Date;

  @IsNotEmptyObject()
  text: {
    header: string;
    subheader: string;
    paragraphs: string[];
  };

  @IsOptional()
  links: {
    spotify: string;
    amazon: string;
    apple: string;
  };
}
