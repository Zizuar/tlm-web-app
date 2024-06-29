import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StreamingScheduleElement } from '../core/models/schedule-day.model';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class StreamingScheduleService extends ApiBaseService {
  private readonly scheduleApiUrl = `${environment.apiBaseUrl}/v1/schedule`;

  constructor(private readonly http: HttpClient, toastService: ToastService) {
    super(toastService);
  }

  getSchedule(): Observable<StreamingScheduleElement[]> {
    return this.http
      .get<StreamingScheduleElement[]>(this.scheduleApiUrl)
      .pipe(
        map((schedule) =>
          schedule.sort((a, b) => {
            return a.dayId > b.dayId ? 1 : a.dayId < b.dayId ? -1 : 0;
          })
        )
      )
      .pipe(catchError(this.handleError.bind(this)));
  }

  updateSchedule(scheduleDay: StreamingScheduleElement): Observable<StreamingScheduleElement> {
    return this.http
      .patch<StreamingScheduleElement>(`${this.scheduleApiUrl}/${scheduleDay._id}`, scheduleDay)
      .pipe(catchError(this.handleError.bind(this)));
  }
}
