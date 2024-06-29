import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ExistingPressRelease, NewPressRelease } from '../core/models/press-release.model';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class PressReleaseService extends ApiBaseService {
  pressReleasesApiUrl = `${environment.apiBaseUrl}/v1/press-releases`;

  constructor(private readonly http: HttpClient, toastService: ToastService) {
    super(toastService);
  }

  getPressReleases(): Observable<ExistingPressRelease[]> {
    return this.http.get<ExistingPressRelease[]>(this.pressReleasesApiUrl).pipe(
      map((response) =>
        response.map((release) => {
          return {
            ...release,
            releaseAfter: new Date(release.releaseAfter),
            createdAt: new Date(release.createdAt),
          };
        })
      ),
      // Sort by date
      map((results) => results.sort(PressReleaseService.sortByDate))
    );
  }

  getPressRelease(id: string): Observable<ExistingPressRelease> {
    return this.http.get<ExistingPressRelease>(`${this.pressReleasesApiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postPressRelease(newPressRelease: NewPressRelease): Observable<ExistingPressRelease> {
    return this.http
      .post<ExistingPressRelease>(this.pressReleasesApiUrl, newPressRelease)
      .pipe(catchError(this.handleError.bind(this)));
  }

  patchPressRelease(updatedPressRelease: ExistingPressRelease): Observable<ExistingPressRelease> {
    return this.http
      .patch<ExistingPressRelease>(`${this.pressReleasesApiUrl}/${updatedPressRelease._id}`, updatedPressRelease)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deletePressRelease(id: string): Observable<ExistingPressRelease> {
    return this.http
      .delete<ExistingPressRelease>(`${this.pressReleasesApiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  static sortByDate(a: NewPressRelease, b: NewPressRelease): number {
    return a.releaseAfter < b.releaseAfter ? 1 : a.releaseAfter > b.releaseAfter ? -1 : 0;
  }
}
