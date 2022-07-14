import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {

  
  @Output() 
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  isTextActivated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isSearch: boolean;
  public enteredSearchValue: string = '';
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
