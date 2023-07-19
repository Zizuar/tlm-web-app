import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateSchedule } from "../../../../../store/schedule/schedule.actions";
import { StreamingScheduleElement } from "../../../../../core/models/schedule-day.model";

@Component({
  selector: 'app-dash-schedule-edit-modal',
  templateUrl: './dash-schedule-edit-modal.component.html',
  styleUrls: ['./dash-schedule-edit-modal.component.scss'],
})
export class DashScheduleEditModalComponent {
  @Input() scheduleDay!: StreamingScheduleElement;

  constructor(public activeModal: NgbActiveModal, private readonly store: Store) {}

  saveChanges() {
    this.store.dispatch(updateSchedule({ schedule: this.scheduleDay }));
    this.activeModal.close('submitted');
  }

  updateStartHour(value: number) {
    this.scheduleDay.startHour = value.toString();
  }

  updateEndHour(value: number) {
    this.scheduleDay.endHour = value.toString();
  }
}
