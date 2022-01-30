import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  faPlusSquare,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { DashProductsNewProductModalComponent } from './dash-products-new-product-modal/dash-products-new-product-modal.component';

@Component({
  selector: 'app-dash-products',
  templateUrl: './dash-products.component.html',
  styleUrls: ['./dash-products.component.scss'],
})
export class DashProductsComponent {
  plusSquare: IconDefinition = faPlusSquare;

  constructor(private readonly modalService: NgbModal) {}

  newOrder() {
    this.modalService.open(DashProductsNewProductModalComponent, {
      size: 'lg',
    });
  }
}
