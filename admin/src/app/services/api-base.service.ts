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

    console.error('Error encountered:', error);
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
