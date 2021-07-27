import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from './model/product';
import { Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class ProductsService {
 uri = 'http://localhost:3000/products';
 constructor(private http: HttpClient) { }
 addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {
 const obj = {
 ProductName,
 ProductDescription,
 ProductPrice
 };
 console.log(obj);
 this.http.post(`${this.uri}`, obj)
 .subscribe(res => console.log('Done'));
 }
 getProducts() :Observable<Product[]> {
  return this
  .http
  .get<Product[]>(`${this.uri}`);
  }
  editProduct(id: number): Observable<Product> {
    return this
    .http
    .get<Product>(`${this.uri}/${id}`);
    }
}
