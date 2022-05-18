import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Category } from 'src/app/core/models/category.model';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Audio',
    children: [
      {name: 'audifonos'}, 
      {name: 'Audifonos inálambricos'}, 
      {name: 'Audifonos profesional y DJ'},
      {name: 'Equipos de música y karaoke'},
      {name: 'Hi-Fi'},
      {name: 'Instrumentos musicales'},
      {name: 'Parlantes'},
      {name: 'Soundbar y home theater'},
      {name: 'Tocadiscos y Vinilos'},
      {name: 'Parlantes bluetooth'}
    ],
  },
  {
    name: 'TV',
    children: [
      {name: 'Accesorios'},
      {name: 'Proyectores'}, 
      {name: 'Smart tv'}, 
      {name: 'Soportes'}, 
      {name: 'Streaming'},
     
    ],
  },
  {
    name: 'Computación',
    children: [
      {name: 'Accesorios'},
      {name: 'Almacenamiento'}, 
      {name: 'Desktops'}, 
      {name: 'Kindles & eReaders'}, 
      {name: 'Monitores'},
      {name: 'Notebooks'},
      {name: 'Tablets'},
      {name: 'Webcams'},
    ],
  },
  {
    name: 'Videojuegos',
    children: [
      {name: 'Accesorios'},
      {name: 'Consolas'}, 
      {name: 'Juegos'}, 
      {name: 'Suscripciones y tarjetas'}
     
    ],
  },
  {
    name: 'Computación gamer',
    children: [
      {name: 'Accesorios'},
      {name: 'Consolas'}, 
      {name: 'Juegos'}, 
      {name: 'Suscripciones y tarjetas'}
     
    ],
  },
];

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
  
  @Input() public category!: Category | null;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  public treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  constructor(

  ) {
    this.dataSource.data = TREE_DATA;
  }
  


  ngOnInit(): void {
  }

}
