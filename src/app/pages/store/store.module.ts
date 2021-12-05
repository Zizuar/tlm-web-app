import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {SharedComponentsModule} from '../../components/components.shared.module';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
})
export class StoreModule { }
