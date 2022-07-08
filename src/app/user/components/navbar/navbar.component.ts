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

  @Output()
  isTextActivated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public enteredSearchValue: string = '';
  public isSearch: boolean;
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
    this.isSearch = false;
  }
  
  ngOnInit(): void {
    this.fetchCategoriesName();
  }

  public onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
  public onSearch(){
    this.isSearch = true;
    this.isTextActivated.emit(this.isSearch)
  }
  
 /*  isHome(){
    if(this.activatedRoute.routeConfig?.path){
      this.homePath = this.activatedRoute.routeConfig?.path
      if (this.homePath === 'home'){
        this.allCategories()
      }
    }
  }
  allCategories(){
    this.router.navigate(['/user/category/all/name']);
  } */

  async fetchCategoriesName() {
    try {
      const response: any = await this.categoryService.getCategoriesName().toPromise();
      this.categories = response;
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }


}
