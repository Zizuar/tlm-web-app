import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(readonly toastService: ToastService) {}

  protected handleError(error: HttpErrorResponse) {
    this.toastService.show({
      text: 'Error while handling request',
      classname: 'bg-danger text-light',
      options: {
        delay: 10000,
      },
    });

    return throwError(() => 'Something bad happened; please try again later.');
  }
}
