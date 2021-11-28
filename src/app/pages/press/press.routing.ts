import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressComponent } from './press.component';

const routes: Routes = [
  {path: '', component: PressComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressRoutingModule { }
