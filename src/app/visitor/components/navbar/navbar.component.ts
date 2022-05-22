import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category/category.service';


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {

  
  private _transformer = (category: Category, level: number) => {
    return {
      expandable: !!category.subCategories && category.subCategories.length > 0,
      name: category.name,
      level: level,
    };
  };

  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    category => category.level,
    category => category.expandable,
  );

  public treeFlattener = new MatTreeFlattener(
    this._transformer,
    category => category.level,
    category => category.expandable,
    category => category.subCategories,
  );

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, category: ExampleFlatNode) => category.expandable;

  public categories: Category[] = [];
  public id: string;
  public name: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
  ) {
    this.fetchCategoriesName();
    this.id = ''
    this.name = ''
  }
  
  ngOnInit(): void {
  }
  
  async fetchCategoriesName() {
    try {
      const response: any = await this.categoryService.getCategoriesName().toPromise();
      this.categories = response;
      console.log(this.categories)
      this.dataSource.data = this.categories;
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

 
}
