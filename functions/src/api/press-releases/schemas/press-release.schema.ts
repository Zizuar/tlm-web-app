import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date } from 'mongoose';

export type PressReleaseDocument = PressRelease & Document;

@Schema()
export class PressRelease {
  @Prop({ required: true })
  songId: string;

  @Prop({ required: true })
  imgName: string;

  @Prop({
    required: true,
    type: raw({ place: { type: String }, date: { type: String } }),
  })
  dateStamp: {
    place: string;
    date: string;
  };

  @Prop({ required: true, type: Date })
  releaseAfter: Date;

  @Prop({
    type: raw({
      spotify: { type: String },
      amazon: { type: String },
      apple: { type: String },
    }),
  })
  links: {
    spotify: string;
    amazon: string;
    apple: string;
  };

  @Prop({
    required: true,
    type: raw({
      header: { type: String },
      subheader: { type: String },
      paragraphs: { type: [String] },
    }),
  })
  text: {
    header?: string;
    subheader?: string;
    paragraphs?: string[];
  };
}

export const PressReleaseSchema = SchemaFactory.createForClass(PressRelease);
