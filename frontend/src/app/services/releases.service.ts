import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import dayjs from 'dayjs';
import { ExistingRelease, ReleaseCategories } from '../core/models/release.model';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ReleasesService extends ApiBaseService {
  releasesApiUrl = `${environment.apiBaseUrl}/v1/releases`;

  constructor(
    private readonly http: HttpClient,
    toastService: ToastService,
  ) {
    super(toastService);
  }

  getAllReleases(): Observable<ExistingRelease[]> {
    return this.http.get<ExistingRelease[]>(this.releasesApiUrl).pipe(
      map((response) =>
        response.map((release) => {
          return {
            ...release,
            releaseDate: dayjs.tz(release.releaseDate, dayjs.tz.guess()).toDate(),
          };
        }),
      ),
      // Sort by date
      map((results) => results.sort(ReleasesService.sortByDateAscending)),
    );
  }

  getReleasesByCategory(category: ReleaseCategories): Observable<ExistingRelease[]> {
    return this.http.get<ExistingRelease[]>(`${this.releasesApiUrl}/${category}`).pipe(
      map((response) =>
        response.map((release) => {
          return {
            ...release,
            releaseDate: dayjs.tz(release.releaseDate, dayjs.tz.guess()).toDate(),
          };
        }),
      ),
      // Sort by date
      map((results) => results.sort(ReleasesService.sortByDateAscending)),
    );
  }

  getReleaseById(category: ReleaseCategories, id: string): Observable<ExistingRelease> {
    return this.http.get<ExistingRelease>(`${this.releasesApiUrl}/${category}/${id}`).pipe(
      map((release) => {
        return {
          ...release,
          releaseDate: dayjs.tz(release.releaseDate, dayjs.tz.guess()).toDate(),
        };
      }),
    );
  }

  public static sortByDateAscending(a: ExistingRelease, b: ExistingRelease): number {
    return a.releaseDate < b.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0;
  }

  public static sortByDateDescending(a: ExistingRelease, b: ExistingRelease): number {
    return a.releaseDate > b.releaseDate ? 1 : a.releaseDate < b.releaseDate ? -1 : 0;
  }
}
