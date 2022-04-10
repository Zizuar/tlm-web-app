import { Document } from 'mongoose';
import { ReleaseCategory } from './release-category.interface';

export type ReleaseText = {
  header: string;
  subheader?: string;
  text?: string;
};

export type ReleaseLinks = {
  title?: string;
  spotify?: string;
  amazon?: string;
  apple?: string;
};

export type AlbumTrack = {
  title: string;
  youtubeLink?: string;
};

export interface Release extends Document {
  id: string;
  title: string;
  category: ReleaseCategory;
  releaseDate: Date;
  imageName: string;
  text: ReleaseText;
  presaveLink?: string;
  links?: ReleaseLinks;
  linksArray?: ReleaseLinks[];
  tracklist?: AlbumTrack[];
  onPressPage?: boolean;
  orderEnabled?: boolean;
  merchEnabled?: boolean;
}
