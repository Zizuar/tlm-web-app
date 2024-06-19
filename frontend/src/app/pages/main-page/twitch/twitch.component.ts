import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { StreamingScheduleService } from '../../../services/streaming-schedule.service';
import { Observable, take } from 'rxjs';
import { StreamingScheduleElement } from '../../../core/models/schedule-day.model';
import { Store } from '@ngrx/store';
import { selectIsScheduleFetched, selectSchedule } from '../../../store/schedule/schedule.selectors';
import { fetchSchedule } from '../../../store/schedule/schedule.actions';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss'],
})
export class TwitchComponent implements OnInit {
  twitchIcon: IconDefinition = faTwitch;
  streamingSchedule$: Observable<StreamingScheduleElement[]> = this.store.select(selectSchedule);

  constructor(
    private readonly streamingScheduleService: StreamingScheduleService,
    private readonly store: Store,
  ) {}

  ngOnInit() {
    this.store
      .select(selectIsScheduleFetched)
      .pipe(take(1))
      .subscribe((isScheduleFetched) => {
        if (!isScheduleFetched) {
          this.store.dispatch(fetchSchedule());
        }
      });
  }
}
