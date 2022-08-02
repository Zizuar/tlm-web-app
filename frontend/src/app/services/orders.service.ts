import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExistingOrder, NewOrder } from '../core/models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiBaseService } from './api-base.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends ApiBaseService {
  private readonly orderApiUrl = `${environment.apiBaseUrl}/v1/orders`;

  constructor(private readonly http: HttpClient, toastService: ToastService) {
    super(toastService);
  }

  getOrders(): Observable<ExistingOrder[]> {
    return this.http
      .get<ExistingOrder[]>(this.orderApiUrl)
      .pipe(catchError(this.handleError));
  }

  postOrder(order: NewOrder): Observable<NewOrder> {
    return this.http
      .post<NewOrder>(this.orderApiUrl, order)
      .pipe(catchError(this.handleError));
  }

  patchOrder(order: ExistingOrder): Observable<ExistingOrder> {
    return this.http
      .patch<ExistingOrder>(`${this.orderApiUrl}/${order._id}`, order)
      .pipe(catchError(this.handleError));
  }

  removeOrder(id: string): Observable<ExistingOrder> {
    return this.http
      .delete<ExistingOrder>(`${this.orderApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
