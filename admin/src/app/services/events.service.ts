import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, forkJoin, map, Observable, tap } from "rxjs";
import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ExistingScheduledEvent, NewScheduledEvent } from "../core/models/scheduled-event.model";
import dayjs from "dayjs";
import { ApiBaseService } from "./api-base.service";
import { NgbDateStruct, NgbModalRef, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: 'root',
})
export class EventsService extends ApiBaseService {
  eventsApiUrl = `${environment.apiBaseUrl}/v1/events`;

  constructor(
    private readonly http: HttpClient,
    toastService: ToastService,
  ) {
    super(toastService);
  }

  getAllEvents(): Observable<ExistingScheduledEvent[]> {
    return this.http.get<ExistingScheduledEvent[]>(this.eventsApiUrl).pipe(
      map((apiEventArray) =>
        apiEventArray.map<ExistingScheduledEvent>((apiEvent) => {
          return {
            ...apiEvent,
            date: new Date(apiEvent.date),
            createdAt: new Date(apiEvent.createdAt),
          };
        })
      )
    );
  }

  getEvent(id: string): Observable<ExistingScheduledEvent> {
    return this.http.get<ExistingScheduledEvent>(`${this.eventsApiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postEvent(newEvent: NewScheduledEvent): Observable<ExistingScheduledEvent> {
    return this.http.post<ExistingScheduledEvent>(this.eventsApiUrl, newEvent)
      .pipe(catchError(this.handleError.bind(this)));
  }

  patchEvent(updatedEvent: ExistingScheduledEvent): Observable<ExistingScheduledEvent> {
    return this.http
      .patch<ExistingScheduledEvent>(`${this.eventsApiUrl}/${updatedEvent._id}`, updatedEvent)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deleteEvent(id: string): Observable<HttpResponse<ExistingScheduledEvent>> {
    return this.http
      .delete<ExistingScheduledEvent>(
        `${this.eventsApiUrl}/${id}`,
        {
          observe: 'response',
        }
      ).pipe(catchError(this.handleError.bind(this)));
  }

  deleteEventsByIdWithModalProgress(idArray: string[], modal: NgbModalRef): Observable<any> {
    const response: ExistingScheduledEvent[] = [];
    const requests = idArray.map((item, index) => {
      return this.deleteEvent(item).pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            if (event.body) {
              response.push(event.body);
            }
            const progress = modal.componentInstance.progress as BehaviorSubject<number>;
            progress.next(progress.value + 1);
          }
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

  // STATIC HELPER FUNCTIONS

  static filterFutureEvents(events: ExistingScheduledEvent[]): ExistingScheduledEvent[] {
    const now = dayjs();
    return events.filter((event) => {
      // only compare the day, not the actual start time
      return !now.isAfter(dayjs(event.date), 'day');
    });
  }

  static sortEventsByDateDescending(a: ExistingScheduledEvent, b: ExistingScheduledEvent) {
    return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
  }

  static sortEventsByDateAscending(a: ExistingScheduledEvent, b: ExistingScheduledEvent) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  }
}
