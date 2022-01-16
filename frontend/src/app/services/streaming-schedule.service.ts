import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { StreamingScheduleElement } from "../core/models/schedule-day.model";

@Injectable({
  providedIn: 'root'
})
export class StreamingScheduleService {
  private readonly scheduleApiUrl = `${environment.apiBaseUrl}/v1/schedule`

  constructor(private readonly http: HttpClient) { }

  getSchedule(): Observable<StreamingScheduleElement[]> {
    return this.http.get<StreamingScheduleElement[]>(this.scheduleApiUrl).pipe(
      map(schedule => schedule.sort((a, b) => {
        return a.dayId > b.dayId ? 1 : a.dayId < b.dayId ? -1 : 0;
      }))
    );
  }

  updateSchedule(scheduleDay: StreamingScheduleElement): Observable<StreamingScheduleElement> {
    return this.http.patch<StreamingScheduleElement>(
      `${this.scheduleApiUrl}/${scheduleDay._id}`,
      scheduleDay
    );
  }
}
