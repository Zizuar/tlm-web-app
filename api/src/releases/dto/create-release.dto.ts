import { ReleaseCategory } from '../interfaces/release-category.interface';
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { AlbumTrack, ReleaseLinks, ReleaseText } from '../interfaces/release.interface';

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

  text?: ReleaseText;

  @IsOptional()
  links?: ReleaseLinks;

  @IsOptional()
  linksArray?: ReleaseLinks[];

  @IsOptional()
  tracklist?: AlbumTrack[];

  @IsBoolean()
  @IsOptional()
  onPressPage?: boolean;

  @IsBoolean()
  @IsOptional()
  orderEnabled?: boolean;

  @IsBoolean()
  @IsOptional()
  merchEnabled?: boolean;
}
