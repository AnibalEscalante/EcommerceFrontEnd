import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(
    private http: HttpClient
  ) { }

 getAllProduct(): Observable<Product[]> {
    let Product: Product[] = [];
    const response = this.http.get<Product[]>(environment.baseUrl + '/Product/all').pipe(map((data: any) => data.message));
    response.subscribe(
      res => (Product = res)
    );
    return response;
  }  

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl + '/Product/'+ id);
  }

  registNewProduct(Product: Partial<Product>, id:string): Observable<Product> {
    return this.http.post<Product>(environment.baseUrl + '/Product/' + id, Product);
  }

  modifyProduct(Product: Partial<Product>, id: string): Observable<Product> {
    return this.http.patch<Product>(environment.baseUrl + '/Product/'+ id, Product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(environment.baseUrl + '/Product/'+ id);
  } 
}
