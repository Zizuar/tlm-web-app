import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {SharedComponentsModule} from '../../components/components.shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { MerchPromoComponent } from './merch-promo/merch-promo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductsListItemComponent } from './products-list/products-list-item/products-list-item.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import { AddToCartModalComponent } from './products-list/add-to-cart-modal/add-to-cart-modal.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    StoreComponent,
    ProductsListComponent,
    OrderFormComponent,
    MerchPromoComponent,
    ProductsListItemComponent,
    CartDisplayComponent,
    AddToCartModalComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class StoreModule { }
