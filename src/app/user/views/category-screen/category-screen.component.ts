import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category/category.service';


@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.less']
})
export class CategoryScreenComponent implements OnInit {
  
  public category?: Category[] = [];
  constructor(
    public categoryService: CategoryService
  ) { 
    this.fetchCategory()
  }

  ngOnInit(): void {
  }

  async fetchCategory() {
    try {
      this.category = await this.categoryService.getAllCategory().toPromise()
    } catch (error) {
      console.log('Algo ha salido mal');
    }
  }


}
