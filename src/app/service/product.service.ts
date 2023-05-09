import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>
  {
   return this.http.get<Product[]>('http://localhost:3000/products'); 
  }

  add(product : Product): Observable<Product>
  {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  update(product : Product): Observable<Product>
  {
    return this.http.put<Product>('http://localhost:3000/products/'+product.id, product);
  }

  getById(id:number):Observable<Product>
  {
    return this.http.get<Product>('http://localhost:3000/products/'+id);
  }
}
