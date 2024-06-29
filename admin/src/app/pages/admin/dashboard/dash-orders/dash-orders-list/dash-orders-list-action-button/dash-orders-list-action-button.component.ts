import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { archiveOrder, removeOrder, updateOrder } from '../../../../../../store/orders/orders.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashOrdersEditModalComponent } from '../../dash-orders-edit-modal/dash-orders-edit-modal.component';
import { cloneDeep } from 'lodash';
import { ExistingOrder, OrderStatus } from "../../../../../../core/models/order.model";
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent
} from "../../../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { Debug } from "../../../../../../utils/Debug";

@Component({
  selector: 'app-dash-orders-list-action-button',
  templateUrl: './dash-orders-list-action-button.component.html',
  styleUrls: ['./dash-orders-list-action-button.component.scss'],
})
export class DashOrdersListActionButtonComponent {
  @Input() order!: ExistingOrder;

  OrderStatus = OrderStatus;

  constructor(private readonly store: Store, private readonly modalService: NgbModal) {}

  async deleteWarning() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'order';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.removeOrder();
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }

  setStatus(nextStatus: OrderStatus) {
    const updatedOrder: ExistingOrder = {
      ...this.order,
      status: nextStatus,
    };
    this.store.dispatch(updateOrder({ updatedOrder }));
  }

  async archiveOrder() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.warningText =
        'Are you sure you want to archive this order? All personal data will be removed and cannot be recovered.';
      modal.componentInstance.deleteBtnText = 'Archive';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        const order = cloneDeep(this.order);
        this.store.dispatch(archiveOrder({ orderToArchive: order }));
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }

  removeOrder() {
    this.store.dispatch(removeOrder({ id: this.order._id }));
  }

  openEditModal() {
    const modalRef = this.modalService.open(DashOrdersEditModalComponent, {
      size: 'lg',
    });
    // send a copy of the object to the edit form
    modalRef.componentInstance.order = cloneDeep(this.order);
  }
}
