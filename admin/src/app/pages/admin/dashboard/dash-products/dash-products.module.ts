import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashProductsComponent } from './dash-products.component';
import { DashProductsListComponent } from './dash-products-list/dash-products-list.component';
import { DashProductsListItemComponent } from './dash-products-list/dash-products-list-item/dash-products-list-item.component';
import { DashProductsNewProductModalComponent } from './dash-products-new-product-modal/dash-products-new-product-modal.component';
import { DashProductsEditProductModalComponent } from './dash-products-edit-product-modal/dash-products-edit-product-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from "../../../../components/components.shared.module";

@NgModule({
  declarations: [
    DashProductsComponent,
    DashProductsListComponent,
    DashProductsListItemComponent,
    DashProductsNewProductModalComponent,
    DashProductsEditProductModalComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, FontAwesomeModule, FormsModule],
  exports: [DashProductsComponent],
})
export class DashProductsModule {}
