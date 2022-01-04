import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface PressRelease {
  songId: string;
  imgName: string;
  dateStamp: {
    place: string,
    date: string,
  };
  releaseAfter: Date;
  text: {
    header: string,
    subheader: string,
    paragraphs: string[],
  };
  links?: {
    spotify: string,
    amazon: string,
    apple: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class PressReleaseService {
  pressReleasesApiUrl = '/api/v1/press-releases';

  constructor(private readonly http: HttpClient) { }

  getPressReleases(): Observable<PressRelease[]> {
    return this.http.get<PressRelease[]>(this.pressReleasesApiUrl).pipe(
      map(response => response.map(release => {
        return {
          ...release,
          releaseAfter: new Date(release.releaseAfter)
        }
      })),
      // Sort by date
      map(results => results.sort(this.sortByDate))
    );
  }

  private sortByDate(a: PressRelease, b: PressRelease): number {
    return a.releaseAfter < b.releaseAfter ? 1 : a.releaseAfter > b.releaseAfter ? -1 : 0;
  }
}
