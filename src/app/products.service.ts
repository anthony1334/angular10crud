import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
