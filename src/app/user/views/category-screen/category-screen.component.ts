import { Component, OnInit } from '@angular/core';
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
  public products!: Product[] | null;
  public isSubCategory: string;
  constructor(
    public categoryService: CategoryService,
    public activatedRoute: ActivatedRoute,
    public getCategoryService: SubCategoryService
  ) { 
   this.id = this.activatedRoute.snapshot.params['id'];
   this.idSubCategory = this.activatedRoute.snapshot.params['id'];
   this.isSubCategory = 'subCat'
  }

  public searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText)
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
