import { Component, Input } from '@angular/core';
import { StreamingScheduleElement } from '../../../../../../core/models/schedule-day.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashScheduleEditModalComponent } from '../../dash-schedule-edit-modal/dash-schedule-edit-modal.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tr[app-dash-schedule-table-row]',
  templateUrl: './dash-schedule-table-row.component.html',
  styleUrls: ['./dash-schedule-table-row.component.scss'],
})
export class DashScheduleTableRowComponent {
  @Input() scheduleDay!: StreamingScheduleElement;

  constructor(private readonly modalService: NgbModal) {}

  openEditModal() {
    const modalRef = this.modalService.open(DashScheduleEditModalComponent, {
      size: 'lg',
    });
    // send a copy of the object to the edit form
    modalRef.componentInstance.scheduleDay = Object.assign({}, this.scheduleDay);
  }
}
