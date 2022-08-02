import { Injectable, TemplateRef } from '@angular/core';
import { NgbToastOptions } from '@ng-bootstrap/ng-bootstrap/toast/toast-config';

export interface Toast {
  text?: string;
  template?: TemplateRef<any>;
  classname?: string;
  options: NgbToastOptions;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  show(toast: Toast) {
    console.log('Showing toast', toast);
    this.toasts.push(toast);
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
