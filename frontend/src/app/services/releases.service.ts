import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { environment } from "../../environments/environment";
import * as moment from "moment";

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
  releasesApiUrl = `${environment.apiBaseUrl}/v1/releases`;

  constructor(private readonly http: HttpClient) { }

  getAllReleases(): Observable<Release[]> {
    return this.http.get<Release[]>(this.releasesApiUrl).pipe(
      map(response => response.map(release => {
        return {
          ...release,
          releaseDate: moment.parseZone(release.releaseDate).local(true).toDate(),
        }
      })),
      // Sort by date
      map(results => results.sort(this.sortByDate))
    );
  }

  getReleasesByCategory(category: ReleaseCategories): Observable<Release[]> {
    return this.http.get<Release[]>(`${this.releasesApiUrl}/${category}`).pipe(
      map(response => response.map(release => {
        return {
          ...release,
          releaseDate: moment.parseZone(release.releaseDate).local(true).toDate(),
        }
      })),
      // Sort by date
      map(results => results.sort(this.sortByDate))
    );
  }

  getReleaseById(category: ReleaseCategories, id: string): Observable<Release> {
    return this.http.get<Release>(`${this.releasesApiUrl}/${category}/${id}`).pipe(
      map(release => {
        return {
          ...release,
          releaseDate: moment.parseZone(release.releaseDate).local(true).toDate(),
        }
      })
    );
  }

  private sortByDate(a: Release, b: Release): number {
    return a.releaseDate < b.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0;
  }
}
