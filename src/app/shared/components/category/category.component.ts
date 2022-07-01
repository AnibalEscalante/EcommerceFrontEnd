import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { SubCategoryService } from 'src/app/core/services/subCategory/sub-category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  @Input() searchText: any;
  @Input() category!: Category;
  @Input() isSubCategory: any;
  @Input() isTextActivated!: boolean;

  public subCategory!: SubCategory;
  public categories!: Category [];

  public idSubCategory: string;
  public products!: Product[];
  public page_size: number = 2
  public page_number: number = 1
  public productLength: number;
  constructor(
    public activatedRoute: ActivatedRoute,
    public getSubCategoryService: SubCategoryService,
    public getCategoryService: CategoryService
  ) { 
    this.idSubCategory = this.activatedRoute.snapshot.params['id'];
    this.productLength = 0;

    if(this.searchText !== '' && this.isTextActivated === true){
      this.fetchCategories()
    }
  }

  ngOnInit(): void {
    this.fetchIsSubCategory()
    console.log(this.searchText);
    
    if(this.searchText !== '' && this.isTextActivated === true){
      this.fetchCategories()
    }
  }
  
  async fetchSubCategory() {
    try {
      const response: any = await this.getSubCategoryService.getSubCategory(this.idSubCategory).toPromise();
      this.subCategory = response.message;
      if (this.subCategory.products) {
        this.products = this.subCategory.products
        console.log(this.products);
        
      }
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }
  async fetchCategories(){
    try {
      const response: any = await this.getCategoryService.getProductCategoriesName(this.searchText).toPromise();
      this.categories = response;
      console.log(this.searchText);
      
      for(let category of this.categories){
        if (category.subCategories) {
          for(let subCategory of category.subCategories){
            if(subCategory.products){
              this.products = subCategory.products
              console.log(this.products);
            }
          }
        }
      }
      if (this.subCategory.products) {
        this.products = this.subCategory.products
      }
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }
  fetchIsSubCategory(){
    if(this.isSubCategory === 'subCat'){
      this.fetchSubCategory()
    }
    if(this.isSubCategory === 'allCat'){
      if(this.searchText !== '' && this.isTextActivated === true){
        this.fetchCategories()
      }
    }
  }
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  search(){
    if(this.searchText == ""){
      this.ngOnInit();
    }else{
     
    }
  }
  //////// ver despues subject rxjs pagination ////////////
  refresh(): void { 
      const firstTime = localStorage.getItem('first')
    if(!firstTime){
      localStorage.setItem('first','loaded')
      location.reload()
    }else {
      localStorage.removeItem('first') 
    }
  }

}
