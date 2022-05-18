import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { CategoryComponent } from 'src/app/shared/components/category/category.component';


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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {


  public categories: Category[] = [];
  public id: string;
  public name: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
  ) {
    this.fetchCategoriesName()
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
      for(let category of this.categories){
        for(let categoryChildreens of TREE_DATA){
          if(category.name = categoryChildreens.name){
            
          }
        }
      }
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

 
}
