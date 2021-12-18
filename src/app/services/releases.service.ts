import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

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

export interface AlbumTrack {
  title: string;
  youtubeLink?: string;
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
  tracklist?: AlbumTrack[];
  presaveLink?: string;
  onPressPage?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  releasesApiUrl = '/api/v1/releases';

  constructor(private readonly http: HttpClient) { }

  getAllReleases(): Observable<Release[]> {
    return this.http.get<Release[]>(this.releasesApiUrl).pipe(
      map(response => response.map(release => {
        return {
          ...release,
          releaseDate: new Date(release.releaseDate)
        }
      }))
    );
  }

  getReleasesByCategory(category: ReleaseCategories): Observable<Release[]> {
    return this.http.get<Release[]>(`${this.releasesApiUrl}/${category}`).pipe(
      map(response => response.map(release => {
        return {
          ...release,
          releaseDate: new Date(release.releaseDate)
        }
      }))
    );
  }

  getReleaseById(category: ReleaseCategories, id: string): Observable<Release> {
    return this.http.get<Release>(`${this.releasesApiUrl}/${category}/${id}`).pipe(
      map(release => {
        return {
          ...release,
          releaseDate: new Date(release.releaseDate)
        }
      })
    );
  }
}
