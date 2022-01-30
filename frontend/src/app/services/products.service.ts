import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NewProduct, Product } from '../core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiBaseService {
  private readonly productsApiUrl = `${environment.apiBaseUrl}/v1/products`;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsApiUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${this.productsApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  postProduct(product: NewProduct): Observable<Product> {
    return this.http
      .post<Product>(this.productsApiUrl, product)
      .pipe(catchError(this.handleError));
  }

  patchProduct(updatedProduct: Product): Observable<Product> {
    return this.http
      .patch<Product>(
        `${this.productsApiUrl}/${updatedProduct._id}`,
        updatedProduct
      )
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http
      .delete<Product>(`${this.productsApiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
