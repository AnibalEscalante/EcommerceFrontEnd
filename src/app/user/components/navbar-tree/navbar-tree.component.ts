import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-navbar-tree',
  templateUrl: './navbar-tree.component.html',
  styleUrls: ['./navbar-tree.component.less']
})
export class NavbarTreeComponent implements OnInit {

   
  @Input() public subCategory!: SubCategory;

  public category!: Category;
  public id: string;
  public name: string;
  constructor(
    public categoryService: CategoryService,
  ) {
    this.id = ''
    this.name = ''
  
  }

  ngOnInit(): void {
  }

}
