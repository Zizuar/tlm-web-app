import { Component, Input, OnInit } from '@angular/core';
import {
  ExistingOrder,
  OrderStatus,
} from '../../../../../../core/models/order.model';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  removeOrder,
  updateOrder,
} from '../../../../../../store/orders/orders.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashOrdersEditModalComponent } from '../../dash-orders-edit-modal/dash-orders-edit-modal.component';
import { cloneDeep } from 'lodash';
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent,
} from '../../../../../../components/delete-confirm-modal/delete-confirm-modal.component';

@Component({
  selector: 'app-dash-orders-list-action-button',
  templateUrl: './dash-orders-list-action-button.component.html',
  styleUrls: ['./dash-orders-list-action-button.component.scss'],
})
export class DashOrdersListActionButtonComponent implements OnInit {
  @Input() order!: ExistingOrder;

  buttonText_ = new BehaviorSubject('');

  OrderStatus = OrderStatus;

  constructor(
    private readonly store: Store,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit() {
    switch (this.order.status) {
      case OrderStatus.CREATED:
        this.buttonText_.next('Invoiced');
        break;
      case OrderStatus.INVOICE_SENT:
        this.buttonText_.next('Paid');
        break;
      case OrderStatus.PAID:
        this.buttonText_.next('Shipped');
        break;
      default:
        this.buttonText_.next('Remove');
        break;
    }
  }

  async nextStateButton() {
    if (
      this.order.status !== OrderStatus.SHIPPED &&
      this.order.status !== OrderStatus.ABANDONED
    ) {
      const updatedOrder: ExistingOrder = {
        ...this.order,
        status: this.order.status + 1,
      };
      this.store.dispatch(updateOrder({ updatedOrder }));
    } else {
      await this.deleteWarning();
    }
  }

  async deleteWarning() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'order';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.removeOrder();
      }
    } catch (e) {
      console.log('Dialog closed without answer');
    }
  }

  setStatus(nextStatus: OrderStatus) {
    const updatedOrder: ExistingOrder = {
      ...this.order,
      status: nextStatus,
    };
    this.store.dispatch(updateOrder({ updatedOrder }));
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
