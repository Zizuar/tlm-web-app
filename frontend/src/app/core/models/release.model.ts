export interface ReleaseText {
  header: string;
  subheader?: string;
  text?: string;
}

export interface ReleaseLinks {
  title?: string;
  spotify?: string;
  amazon?: string;
  apple?: string;
}

export interface AlbumTrack {
  title: string;
  youtubeLink?: string;
}

export enum ReleaseCategories {
  Songs = 'songs',
  Collections = 'collections',
  Albums = 'albums',
}

export interface NewRelease {
  id: string;
  title: string;
  category: ReleaseCategories;
  releaseDate: Date;
  imageName: string;
  presaveLink?: string;
  text: ReleaseText;
  links?: ReleaseLinks;
  linksArray?: ReleaseLinks[];
  tracklist?: AlbumTrack[];
  onPressPage?: boolean;
  orderEnabled?: boolean;
  merchEnabled?: boolean;
}

export interface ExistingRelease extends NewRelease {
  _id: string;
}
