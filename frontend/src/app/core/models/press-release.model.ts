export interface NewPressRelease {
  songId: string;
  imgName: string;
  dateStamp: {
    place: string;
    date: string;
  };
  releaseAfter: Date;
  text: {
    header: string;
    subheader: string;
    paragraphs: string[];
  };
  links?: {
    spotify: string;
    amazon: string;
    apple: string;
  };
}

export interface ExistingPressRelease extends NewPressRelease {
  _id: string;
  createdAt: Date;
}
