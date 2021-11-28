import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  releasesApiUrl = '/api/v1/releases';

  constructor(private readonly http: HttpClient) { }

  getAllReleases() {
    return this.http.get<Object[]>(this.releasesApiUrl);
  }
}
