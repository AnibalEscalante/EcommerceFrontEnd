import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { SubCategoryService } from 'src/app/core/services/subCategory/sub-category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  public subCategory!: SubCategory;
  public idSubCategory: string;
  public products!: Product[];
  public page_size: number = 2
  public page_number: number = 1
  constructor(
    public activatedRoute: ActivatedRoute,
    public getCategoryService: SubCategoryService,
  ) { 
    this.idSubCategory = this.activatedRoute.snapshot.params['id'];
  
  }

  ngOnInit(): void {
    this.fetchSubCategory()
  }
  
  async fetchSubCategory() {
    try {
      const response: any = await this.getCategoryService.getSubCategory(this.idSubCategory).toPromise();
      this.subCategory = response.message;
      this.products = this.subCategory.products
      

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
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
