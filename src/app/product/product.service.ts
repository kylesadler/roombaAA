import { Injectable } from '@angular/core';
import { Product } from './product.js';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.baseUrl + '/api/product/';

  constructor(private http: HttpClient) { }

  getProducts(): Promise<void | Product[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response as Product[])
               .catch(this.handleError);
  }

  getProduct(id: string): Promise<void | Product> {
    return this.http.get(this.apiUrl + id)
               .toPromise()
               .then(response => response as Product)
               .catch(this.handleError);
  }

  addProduct(product: Product): Promise<void | Product> {
    return this.http.post(this.apiUrl, product)
               .toPromise()
               .then(response => response as Product)
               .catch(this.handleError);
  }

  updateProduct(id: string, product: Product): Promise<void | Product> {
    return this.http.patch(this.apiUrl + id, product)
               .toPromise()
               .then(response => response as Product)
               .catch(this.handleError);
  }

  deleteProduct(id: string): Promise<void | any> {
    return this.http.delete(this.apiUrl + id)
               .toPromise()
               .then(response => response as any)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : 'Server error';
    console.error(errMsg);
  }
}
