import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { SubCategory } from 'src/app/core/models/subCategory.model';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { SubCategoryService } from 'src/app/core/services/subCategory/sub-category.service';

/* interface Product{
  id:string;
  brand: string;
  description: string;
  price: string;
  image: string;
}
const PRODUCT_DATA: Product[] = [
  {
    id:'1',
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a1'
  },
  {
    id:'2',
    brand: 'Panasonic',
    description:'AUDIFONOS Panasonic BT WH-CH510 AZUL',
    price: '$100.000',
    image: 'a2'
  },
  {
    id:'3',
    brand: 'Motorola',
    description:'AUDIFONOS Motorola BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a3'
  },
  {
    id:'4',
    brand: 'Apple',
    description:'AUDIFONOS Apple BT WH-CH510 AZUL',
    price: '$1.500.000',
    image: 'a4'
  },
  {
    id:'5',
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a5'
  },
]; */

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  public subCategories: SubCategory[] = [];
  public idCategory: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    public getCategoryService: SubCategoryService,
  ) { 
    this.subCategories = [];
    this.idCategory = "";
  
  }

  ngOnInit(): void {
    /* this.refresh(); */
    /* console.log(this.category._id) */
    this.fetchSubCategory()
  }
  
  async fetchSubCategory() {
    try {
      const response: any = await this.getCategoryService.getSubCategory(this.category._id).toPromise();
      this.subCategories = response;
     /*  console.log(this.category.name) */
      /* console.log(this.subCategories) */

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  refresh(): void { 
      const firstTime = localStorage.getItem('first')
    if(!firstTime){
      localStorage.setItem('first','loaded')
      location.reload()
    }else {
      localStorage.removeItem('first') 
    }
  }

}
