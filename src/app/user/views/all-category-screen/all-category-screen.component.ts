import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-all-category-screen',
  templateUrl: './all-category-screen.component.html',
  styleUrls: ['./all-category-screen.component.less']
})
export class AllCategoryScreenComponent implements OnInit {
  
  public page_size: number = 2
  public page_number: number = 1
  public productLength: number;
  public products!: Product[];
  public search: string;
  public searchText: string = '';

  constructor(
    public activatedRoute: ActivatedRoute,
    public getCategoryService: CategoryService
  ) {
    this.productLength = 0;
    this.search = '';
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    if(this.searchText != ''){
      this.searchText = this.activatedRoute.snapshot.params['id'];
      this.fetchCategories();
    }
  }

  async fetchCategories(){
    try {
      const response: any = await this.getCategoryService.getProductCategoriesName(this.searchText).toPromise();
      console.log(response);
      this.products = response.message.productList
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
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
  }

}
