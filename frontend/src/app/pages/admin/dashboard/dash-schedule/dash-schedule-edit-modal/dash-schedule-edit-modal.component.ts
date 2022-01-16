import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StreamingScheduleElement } from '../../../../../core/models/schedule-day.model';
import { Store } from "@ngrx/store";
import { updateSchedule } from "../../../../../store/schedule.actions";

@Component({
  selector: 'app-dash-schedule-edit-modal',
  templateUrl: './dash-schedule-edit-modal.component.html',
  styleUrls: ['./dash-schedule-edit-modal.component.scss'],
})
export class DashScheduleEditModalComponent {
  @Input() scheduleDay!: StreamingScheduleElement;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly store: Store,
  ) {}

  saveChanges() {
    this.store.dispatch(updateSchedule({schedule: this.scheduleDay}));
    this.activeModal.close('submitted');
  }
}
