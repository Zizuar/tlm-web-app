import { Component, HostBinding } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: 'toasts-container.component.html',
})
export class ToastsContainerComponent {
  @HostBinding('class') class =
    'toast-container position-absolute top-0 end-0 p-3';
  @HostBinding('style') style = 'z-index: 1200';

  constructor(public toastService: ToastService) {}
}
