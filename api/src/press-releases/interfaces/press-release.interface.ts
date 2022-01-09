import { Document, Date } from 'mongoose';

export interface PressRelease extends Document {
  songId: string;
  imgName: string;
  dateStamp: {
    place: string;
    date: string;
  };
  releaseAfter: Date;
  links?: {
    spotify: string;
    amazon: string;
    apple: string;
  };
  text: {
    header?: string;
    subheader?: string;
    paragraphs?: string[];
  };
}
