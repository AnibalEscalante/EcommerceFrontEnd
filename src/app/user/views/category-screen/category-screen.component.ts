import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category/category.service';


@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.less']
})
export class CategoryScreenComponent implements OnInit {
  
  public category?: Category[] = [];
  public id: string;
  constructor(
    public categoryService: CategoryService,
    public activatedRoute: ActivatedRoute
    
 
  ) { 
    this.fetchCategory()
   this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }


  async fetchCategory() {
    try {
      console.log(this.id)
      const response: any = await this.categoryService.getCategoryName(this.id!).toPromise();
      this.category = response.message;
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }


}
