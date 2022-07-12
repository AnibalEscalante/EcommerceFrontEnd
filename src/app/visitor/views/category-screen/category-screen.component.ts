import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
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
  public subCategory!: SubCategory ;
  public products!: Product[];
  public page_size: number = 2
  public page_number: number = 1
  public productLength: number;
  public idSubCategory: string;
  public id: string;
  constructor( 
    public activatedRoute: ActivatedRoute,
    public getSubCategoryService: SubCategoryService,
    public getCategoryService: CategoryService,
    public router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.idSubCategory = this.activatedRoute.snapshot.params['id'];
    this.productLength = 0;
  }

  ngOnInit(): void {
    const firstTime = localStorage.getItem('key')
     if(!firstTime){
      localStorage.setItem('key','loaded')
      location.reload()
     }else {
       localStorage.removeItem('key') 
     }
     this.fetchSubCategory()
  }

  
  async fetchSubCategory() {
    try {
      const response: any = await this.getSubCategoryService.getSubCategory(this.idSubCategory).toPromise();
      this.subCategory = response.message;
      if (this.subCategory.products) {
        this.products = this.subCategory.products
        
      }
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  async fetchCategories(){
    try {
      const response: any = await this.getCategoryService.getProductCategoriesName(this.searchText).toPromise();
      this.products = response.message.productList
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  public searchText: string = '';
  onSearchTextEntered(event: string) {
    this.searchText = event;
    console.log(this.searchText)
    if(this.searchText !== ''){
      this.router.navigate(['/user/category/all/name/',this.searchText]);
    }
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

}
