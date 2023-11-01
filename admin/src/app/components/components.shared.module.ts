import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DeleteConfirmModalComponent } from './delete-confirm-modal/delete-confirm-modal.component';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';
import { ClickStopPropagationDirective } from "../directives/click-stop-propagation.directive";
import { LoadingProgressbarModalComponent } from './loading-progressbar/loading-progressbar-modal.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    LoadingSpinnerComponent,
    DeleteConfirmModalComponent,
    ToastsContainerComponent,
    ClickStopPropagationDirective,
    LoadingProgressbarModalComponent,
  ],
  imports: [CommonModule, NgbModule, FontAwesomeModule, RouterModule],
  exports: [
    LoadingScreenComponent,
    LoadingSpinnerComponent,
    DeleteConfirmModalComponent,
    ToastsContainerComponent,
    ClickStopPropagationDirective,
  ],
})
export class SharedComponentsModule {}
