import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NewOrder } from '../core/models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends ApiBaseService {
  private readonly orderApiUrl = `${environment.apiBaseUrl}/v1/orders`;

  constructor(
    private readonly http: HttpClient,
    toastService: ToastService,
  ) {
    super(toastService);
  }

  postOrder(order: NewOrder): Observable<NewOrder> {
    return this.http.post<NewOrder>(this.orderApiUrl, order).pipe(catchError(this.handleError));
  }
}
