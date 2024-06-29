import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "./toast.service";
import {ApiBaseService} from "./api-base.service";
import {BehaviorSubject, catchError, forkJoin, Observable, tap} from "rxjs";
import { ExistingEventVenue, NewEventVenue } from "../core/models/event-venue.model";
import {map} from "rxjs";
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class VenuesService extends ApiBaseService {
  venuesApiUrl = `${environment.apiBaseUrl}/v1/venues`;

  constructor(private readonly http: HttpClient, toastService: ToastService) {
    super(toastService);
  }

  getAllVenues(): Observable<ExistingEventVenue[]> {
    return this.http.get<ExistingEventVenue[]>(this.venuesApiUrl).pipe(
      map((apiVenueArray) =>
        apiVenueArray.map<ExistingEventVenue>((apiVenue) => {
          return {
            ...apiVenue,
            createdAt: new Date(apiVenue.createdAt),
          };
        })
      )
    );
  }

  getVenue(id: string): Observable<ExistingEventVenue> {
    return this.http.get<ExistingEventVenue>(`${this.venuesApiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postVenue(newVenue: NewEventVenue): Observable<ExistingEventVenue> {
    return this.http.post<ExistingEventVenue>(this.venuesApiUrl, newVenue)
      .pipe(catchError(this.handleError.bind(this)));
  }

  patchVenue(updatedVenue: ExistingEventVenue): Observable<ExistingEventVenue> {
    return this.http
      .patch<ExistingEventVenue>(`${this.venuesApiUrl}/${updatedVenue._id}`, updatedVenue)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deleteVenue(id: string): Observable<ExistingEventVenue> {
    return this.http
      .delete<ExistingEventVenue>(
        `${this.venuesApiUrl}/${id}`
      ).pipe(catchError(this.handleError.bind(this)));
  }


  deleteVenuesByIdWithModalProgress(ids: string[], modal: NgbModalRef): Observable<any> {
    const response: ExistingEventVenue[] = [];
    const requests = ids.map((id) => {
      return this.deleteVenue(id).pipe(
        tap(venue => {
          if (venue) {
            response.push(venue);
          }
          const progress = modal.componentInstance.progress as BehaviorSubject<number>;
          progress.next(progress.value + 1);
        }),
        catchError((error) => {
          modal.close();
          return this.handleError(error);
        })
      );
    });
    return forkJoin(requests).pipe(
      map(() => {
        return response;
      })
    );
  }
}
