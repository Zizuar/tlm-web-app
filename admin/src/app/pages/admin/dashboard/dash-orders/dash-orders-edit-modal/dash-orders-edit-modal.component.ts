import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { updateOrder } from '../../../../../store/orders/orders.actions';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ExistingOrder } from "../../../../../core/models/order.model";
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent
} from "../../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { Debug } from "../../../../../utils/Debug";

@Component({
  selector: 'app-dash-orders-edit-modal',
  templateUrl: './dash-orders-edit-modal.component.html',
  styleUrls: ['./dash-orders-edit-modal.component.scss'],
})
export class DashOrdersEditModalComponent {
  @Input() order!: ExistingOrder;

  faTrash: IconDefinition = faTrashAlt;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly modalService: NgbModal,
    private readonly store: Store
  ) {}

  saveChanges() {
    this.store.dispatch(updateOrder({ updatedOrder: this.order }));
    this.activeModal.close('submitted');
  }

  async removeCartItem(idx: number) {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'item';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.order.cart = this.order.cart.filter((product, index) => {
          return index !== idx;
        });
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }
}
