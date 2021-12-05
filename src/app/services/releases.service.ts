import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export enum ReleaseCategories {
  Song = 'songs',
  Collection = 'collections',
  Album = 'albums'
}

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

export interface Release {
  id: string;
  title: string;
  category: ReleaseCategories;
  releaseDate: Date;
  imageName: string;
  text: ReleaseText;
  links?: ReleaseLinks;
  linksArray?: ReleaseLinks[];
  orderEnabled?: boolean;
  merchEnabled?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  releasesApiUrl = '/api/v1/releases';

  constructor(private readonly http: HttpClient) { }

  getAllReleases(): Observable<Release[]> {
    return this.http.get<Release[]>(this.releasesApiUrl);
  }
}
