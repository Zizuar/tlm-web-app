import { Document } from 'mongoose';
import { ReleaseCategory } from './release-category.interface';

export interface Release extends Document {
  id: string;
  title: string;
  category: ReleaseCategory;
  releaseDate: Date;
  imageName: string;
  presaveLink?: string;
  text?: {
    header?: string;
    subheader?: string;
    text?: string;
  };
  links?: {
    spotify: string;
    amazon: string;
    apple: string;
  };
  linksArray?: [
    {
      title: string;
      spotify?: string;
      amazon?: string;
      apple?: string;
    },
  ];
  tracklist?: [
    {
      title: string;
      youtubeLink?: string;
    },
  ];
  onPressPage?: boolean;
}
