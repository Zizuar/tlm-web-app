import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashProductsEditProductModalComponent } from '../../dash-products-edit-product-modal/dash-products-edit-product-modal.component';
import { cloneDeep } from 'lodash';
import { Store } from '@ngrx/store';
import { Product } from "../../../../../../core/models/product.model";
import {
  DeleteConfirmDialogResult,
  DeleteConfirmModalComponent
} from "../../../../../../components/delete-confirm-modal/delete-confirm-modal.component";
import { removeProduct } from "../../../../../../store/products/products.actions";
import { Debug } from "../../../../../../utils/Debug";

@Component({
  selector: 'app-dash-products-list-item',
  templateUrl: './dash-products-list-item.component.html',
  styleUrls: ['./dash-products-list-item.component.scss'],
})
export class DashProductsListItemComponent {
  @Input() product!: Product;
  editIcon: IconDefinition = faEdit;
  deleteIcon: IconDefinition = faTrash;

  constructor(private readonly modalService: NgbModal, private readonly store: Store) {}

  openEditProductModal() {
    const modal = this.modalService.open(DashProductsEditProductModalComponent, {
      size: 'lg',
    });
    modal.componentInstance.product = cloneDeep(this.product);
  }

  async openDeleteConfirm() {
    try {
      const modal = this.modalService.open(DeleteConfirmModalComponent);
      modal.componentInstance.itemType = 'product';
      const result = await modal.result;
      if (result === DeleteConfirmDialogResult.DELETE) {
        this.deleteProduct();
      }
    } catch (e) {
      Debug.log('Dialog closed without answer');
    }
  }

  private deleteProduct() {
    this.store.dispatch(removeProduct({ id: this.product._id }));
  }
}
