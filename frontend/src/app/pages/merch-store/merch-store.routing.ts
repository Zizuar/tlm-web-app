import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchStoreComponent } from './merch-store.component';

const routes: Routes = [{ path: '', component: MerchStoreComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
