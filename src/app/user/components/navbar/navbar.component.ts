import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent{
 
  
  public categories: Category[] = [];
  public subCategories: SubCategory[] = [];
  public id: string;
  public name: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
  ) {
    this.id = ''
    this.name = ''
  }
  
  ngOnInit(): void {
    this.fetchCategoriesName();
  }

  async fetchCategoriesName() {
    try {
      const response: any = await this.categoryService.getCategoriesName().toPromise();
      this.categories = response;
      console.log(this.categories)
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }


}
