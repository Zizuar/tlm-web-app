import { Component, Input, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashEventsEditEventModalComponent } from '../dash-events-edit-event-modal/dash-events-edit-event-modal.component';
import { cloneDeep } from 'lodash';
import { Store } from '@ngrx/store';
import { ExistingScheduledEvent } from "../../../../../core/models/scheduled-event.model";
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent
} from "../../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { removeEvent } from "../../../../../store/events/events.actions";
import { Debug } from "../../../../../utils/Debug";

@Component({
  selector: 'app-dash-events-list-item',
  templateUrl: './dash-events-list-item.component.html',
  styleUrls: ['./dash-events-list-item.component.scss'],
})
export class DashEventsListItemComponent implements OnInit {

  editIcon: IconDefinition = faEdit;
  deleteIcon: IconDefinition = faTrash;

  @Input() event!: ExistingScheduledEvent;
  isFutureEvent = false;

  constructor(private readonly modalService: NgbModal, private readonly store: Store) {}

  ngOnInit(): void {
    this.isFutureEvent = dayjs
      .tz(this.event.endDate ?? this.event.date, this.event.timezone ?? 'America/New_York')
      .isAfter(new Date(), 'day');
  }

  openEditEventModal() {
    const modal = this.modalService.open(DashEventsEditEventModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.event = cloneDeep(this.event);
  }

  async openDeleteConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'event';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deleteEvent();
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }

  deleteEvent() {
    this.store.dispatch(removeEvent({ id: this.event._id }));
  }

  protected readonly dayjs = dayjs;
}
