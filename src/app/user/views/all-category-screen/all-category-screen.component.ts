import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-category-screen',
  templateUrl: './all-category-screen.component.html',
  styleUrls: ['./all-category-screen.component.less']
})
export class AllCategoryScreenComponent implements OnInit {
  
  public isSubCategory: string;
  constructor() {

    this.isSubCategory = 'allCat'
  }

  public searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText)
  }

  public isTextActivated: boolean = true;
  onSearchActivated(event: boolean){
    this.isTextActivated = event
    console.log(this.isTextActivated);
    
  }

  ngOnInit(): void {
  }

}
