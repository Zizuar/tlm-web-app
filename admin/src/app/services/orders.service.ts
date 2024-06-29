import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExistingOrder, NewOrder, OrderStatus } from '../core/models/order.model';
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
    return this.http.get<ExistingOrder[]>(this.orderApiUrl)
      .pipe(catchError(this.handleError.bind(this)));
  }

  postOrder(order: NewOrder): Observable<NewOrder> {
    return this.http.post<NewOrder>(this.orderApiUrl, order)
      .pipe(catchError(this.handleError.bind(this)));
  }

  patchOrder(order: ExistingOrder): Observable<ExistingOrder> {
    return this.http.patch<ExistingOrder>(`${this.orderApiUrl}/${order._id}`, order)
      .pipe(catchError(this.handleError.bind(this)));
  }

  archiveOrder(order: ExistingOrder): Observable<ExistingOrder> {
    return this.http
      .patch<ExistingOrder>(`${this.orderApiUrl}/${order._id}`, this.scrubPersonalData(order))
      .pipe(catchError(this.handleError.bind(this)));
  }

  removeOrder(id: string): Observable<ExistingOrder> {
    return this.http.delete<ExistingOrder>(`${this.orderApiUrl}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  private scrubPersonalData(order: ExistingOrder): ExistingOrder {
    const updatedOrder = {
      ...order,
      email: 'removed@for.privacy',
      mailName: 'Removed',
      street1: 'Removed',
      city: 'Removed',
      zip: 'Removed',
      country: 'Removed',
      otherRequests: 'Removed',
      status: OrderStatus.ARCHIVED,
    };
    if (order.street2) {
      updatedOrder.street2 = 'Removed';
    }
    if (order.state) {
      updatedOrder.state = 'Removed';
    }
    updatedOrder.cart = [...order.cart].map((item) => {
      const updatedItem = { ...item };
      if (item.signatureName) {
        updatedItem.signatureName = 'Removed';
      }
      return updatedItem;
    });
    return updatedOrder;
  }
}
