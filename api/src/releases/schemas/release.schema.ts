import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date } from 'mongoose';
import { ReleaseCategory } from '../interfaces/release-category.interface';

export type ReleaseDocument = Release & Document;

@Schema({ timestamps: true })
export class Release {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: ReleaseCategory;

  @Prop({ required: true, type: Date })
  releaseDate: Date;

  @Prop({ required: true })
  imageName: string;

  @Prop()
  presaveLink: string;

  @Prop(
    raw({
      header: { type: String },
      subheader: { type: String },
      text: { type: String },
    }),
  )
  text: {
    header?: string;
    subheader?: string;
    text?: string;
  };

  @Prop(
    raw({
      spotify: { type: String },
      amazon: { type: String },
      apple: { type: String },
    }),
  )
  links: {
    spotify: string;
    amazon: string;
    apple: string;
  };

  @Prop(
    raw({
      title: { type: String },
      spotify: { type: String },
      amazon: { type: String },
      apple: { type: String },
    }),
  )
  linksArray: [
    {
      title: string;
      spotify?: string;
      amazon?: string;
      apple?: string;
    },
  ];

  @Prop(
    raw([
      {
        title: { type: String },
        youtubeLink: { type: String },
      },
    ]),
  )
  tracklist: [
    {
      title: string;
      youtubeLink?: string;
    },
  ];

  @Prop()
  onPressPage: boolean;
}

export const ReleaseSchema = SchemaFactory.createForClass(Release);
