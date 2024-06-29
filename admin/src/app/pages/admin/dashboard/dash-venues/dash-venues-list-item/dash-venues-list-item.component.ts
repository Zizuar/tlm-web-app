import { Component, Input } from '@angular/core';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ExistingEventVenue } from "../../../../../core/models/event-venue.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from "@ngrx/store";
import { DashVenuesModalComponent } from "../dash-venues-modal/dash-venues-modal.component";
import { cloneDeep } from "lodash";
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent
} from "../../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { removeVenue } from "../../../../../store/venues/venues.actions";
import { Debug } from "../../../../../utils/Debug";

@Component({
  selector: 'app-dash-venues-list-item',
  templateUrl: './dash-venues-list-item.component.html',
  styleUrl: './dash-venues-list-item.component.scss'
})
export class DashVenuesListItemComponent {
  @Input() venue!: ExistingEventVenue;

  editIcon: IconDefinition = faEdit;
  deleteIcon: IconDefinition = faTrash;

  constructor(
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) {}

  openEditVenueModal() {
    const modal = this.modalService.open(DashVenuesModalComponent, {
      size: 'lg'
    });
    modal.componentInstance.venue = cloneDeep(this.venue);
    modal.componentInstance.isNew = false;
  }

  async openDeleteConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'venue';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deleteVenue();
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }

  deleteVenue() {
    this.store.dispatch(removeVenue({ id: this.venue._id }));
  }
}
