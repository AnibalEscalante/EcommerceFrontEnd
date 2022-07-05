import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-all-category-screen',
  templateUrl: './all-category-screen.component.html',
  styleUrls: ['./all-category-screen.component.less']
})
export class AllCategoryScreenComponent implements OnInit {
  
 /*  public isSubCategory: string; */
  public products!: Product[];
  constructor(
    public activatedRoute: ActivatedRoute,
    public getCategoryService: CategoryService
  ) {

/*     this.isSubCategory = 'allCat' */
    
  }

  public searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    this.fetchCategories();
    
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

  public isTextActivated: boolean = true;
  onSearchActivated(event: boolean){
    this.isTextActivated = event
  }

  ngOnInit(): void {
  }

}
