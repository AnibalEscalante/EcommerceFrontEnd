import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { SubCategoryService } from 'src/app/core/services/subCategory/sub-category.service';


@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.less']
})
export class CategoryScreenComponent implements OnInit {
  
  public category: Category[] = [];
  public id: string;
  public subCategory!: SubCategory;
  public idSubCategory: string;
  public products!: Product[] | null[];
  /* public isSubCategory: string; */
  public page_size: number = 2
  public page_number: number = 1
  public productLength: number;
  constructor(
    public activatedRoute: ActivatedRoute,
    public getSubCategoryService: SubCategoryService,
    public getCategoryService: CategoryService
  ) { 
   this.id = this.activatedRoute.snapshot.params['id'];
   this.idSubCategory = this.activatedRoute.snapshot.params['id'];
  /*  this.isSubCategory = 'subCat' */
   this.productLength = 0;
  }

  async fetchSubCategory() {
    try {
      const response: any = await this.getSubCategoryService.getSubCategory(this.idSubCategory).toPromise();
      this.subCategory = response.message;
      if (this.subCategory.products) {
        this.products = this.subCategory.products
        console.log(this.products);
        console.log(this.searchText);
      }
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  async fetchCategories(){
    try {
      const response: any = await this.getCategoryService.getProductCategoriesName(this.searchText).toPromise();
      console.log(response);
      this.products = response.message.productList
      console.log(this.products)
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }
  
  /* fetchIsSubCategory(){
    if(this.isSubCategory === 'subCat'){
      this.fetchSubCategory()
    }
    if(this.isSubCategory === 'allCat'){
      this.sText = this.searchText;
      this.fetchCategories()

    }
  } */
  public searchText: string = '';
  onSearchTextEntered(event: string) {
    this.searchText = event;
    console.log(this.searchText)
  }
  
  public isTextActivated: boolean = true;
  onSearchActivated(event: boolean){
    this.isTextActivated = event
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  ngOnInit(): void {
    const firstTime = localStorage.getItem('key')
     if(!firstTime){
      localStorage.setItem('key','loaded')
      location.reload()
     }else {
       localStorage.removeItem('key') 
     }
  }



}
