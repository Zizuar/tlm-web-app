import { ReleaseCategory } from '../interfaces/release-category.interface';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReleaseDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  category: ReleaseCategory;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  releaseDate: Date;

  @IsString()
  @IsNotEmpty()
  imageName: string;

  @IsString()
  @IsOptional()
  presaveLink?: string;

  @IsOptional()
  text?: {
    header?: string;
    subheader?: string;
    text?: string;
  };

  @IsOptional()
  links?: {
    spotify: string;
    amazon: string;
    apple: string;
  };

  @IsOptional()
  linksArray?: [
    {
      title: string;
      spotify?: string;
      amazon?: string;
      apple?: string;
    },
  ];

  @IsOptional()
  tracklist?: [
    {
      title: string;
      youtubeLink?: string;
    },
  ];

  @IsBoolean()
  @IsOptional()
  onPressPage?: boolean;
}
