import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(
    private http: HttpClient
  ) { }

  getAllCategory(): Observable<Category[]> {
    let category: Category[] = [];
    const response = this.http.get<Category[]>(environment.baseUrl + '/category/all').pipe(map((data: any) => data.message));
    response.subscribe(
      res => (category = res)
    );
    return response;
  }  

  getCategoriesName(): Observable<Category[]> {
    let category: Category[] = [];
    const response = this.http.get<Category[]>(environment.baseUrl + '/category/all/name').pipe(map((data: any) => data.message));
    response.subscribe(
      res => (category = res)
    );
    return response;
  }  



  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(environment.baseUrl + '/category/'+ id);
  }

  getCategoryName(id: string): Observable<Category>{
    return this.http.get<Category>( environment.baseUrl + '/category/name/' + id)
  }

 /*  getCategoriesName(): Observable<Category[]>{
    const response = this.http.get<Category[]>( environment.baseUrl + '/category/all/name/')
    return response;
  } */




}
