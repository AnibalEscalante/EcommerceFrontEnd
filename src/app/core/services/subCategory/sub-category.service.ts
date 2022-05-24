import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategory } from '../../models/subCategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSubCategory(): Observable<SubCategory[]> {
    let subCategory: SubCategory[] = [];
    const response = this.http.get<SubCategory[]>(environment.baseUrl + '/subCategory/all').pipe(map((data: any) => data.message));
    response.subscribe(
      res => (subCategory = res)
    );
    return response;
  }  

  getSubCategoriesName(): Observable<SubCategory[]> {
    let subCategory: SubCategory[] = [];
    const response = this.http.get<SubCategory[]>(environment.baseUrl + '/subCategory/all/name').pipe(map((data: any) => data.message));
    response.subscribe(
      res => (subCategory = res)
    );
    return response;
  }  



  getSubCategory(id: string): Observable<SubCategory> {
    return this.http.get<SubCategory>(environment.baseUrl + '/subCategory/'+ id);
  }

  getSubCategoryName(id: string): Observable<SubCategory>{
    return this.http.get<SubCategory>( environment.baseUrl + '/subCategory/name/' + id)
  }

 /*  getCategoriesName(): Observable<SubCategory[]>{
    const response = this.http.get<SubCategory[]>( environment.baseUrl + '/subCategory/all/name/')
    return response;
  } */




}
