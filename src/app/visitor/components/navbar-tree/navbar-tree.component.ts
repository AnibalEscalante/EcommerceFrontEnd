import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category/category.service';


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-navbar-tree',
  templateUrl: './navbar-tree.component.html',
  styleUrls: ['./navbar-tree.component.less']
})
export class NavbarTreeComponent implements OnInit {
  
  @Input() public categories!: Category | null;

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


  public category: Category[] = [];
  public id: string;
  public name: string;
  constructor(
    public categoryService: CategoryService,
  ) {
    this.id = ''
    this.name = ''
    
    /* 
    
    this.fetchCategoriesName(); */
  }

  /* async fetchCategoriesName() {
    try {
      const response: any = await this.categoryService.getCategoriesName().toPromise();
      this.categories = response;
      console.log(this.category)

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  } */
  


  ngOnInit(): void {
    this.dataSource.data = this.category;
  }

}
