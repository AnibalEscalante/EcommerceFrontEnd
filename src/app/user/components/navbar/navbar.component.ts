import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent{
  
  @Output() 
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  public enteredSearchValue: string = '';
  public categories: Category[] = [];
  public subCategories: SubCategory[] = [];
  public id: string;
  public name: string;
  public homePath: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
    public router: Router
  ) {
    this.id = ''
    this.name = ''
    this.homePath =''
  }
  
  ngOnInit(): void {
    this.fetchCategoriesName();
    console.log(this.activatedRoute.routeConfig?.path)
  }

  public onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  
  isHome(){
    if(this.activatedRoute.routeConfig?.path){
      this.homePath = this.activatedRoute.routeConfig?.path
      console.log(this.homePath);
      
      if (this.homePath === 'home'){
        this.allCategories()
      }

    }
  }
  allCategories(){
    this.router.navigate(['/user/category/all/name']);
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
