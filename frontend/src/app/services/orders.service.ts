import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ExistingOrder, NewOrder } from '../core/models/order.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly orderApiUrl = `${environment.apiBaseUrl}/v1/orders`;

  constructor(private readonly http: HttpClient) {}

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

  private handleError(error: HttpErrorResponse) {
    console.error('Error encountered:', error);
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
