import { Component, Input, TemplateRef } from "@angular/core";
import { ExistingOrder } from '../../../../../core/models/order.model';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Store } from '@ngrx/store';
import { updateOrder } from '../../../../../store/orders.actions';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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

  async removeCartItem(modalContent: TemplateRef<any>, idx: number) {
    const result = await this.modalService.open(modalContent).result;
    if (result === 'DELETE') {
      this.order.cart = this.order.cart.filter((product, index) => {
        return index !== idx;
      });
    }
  }
}
