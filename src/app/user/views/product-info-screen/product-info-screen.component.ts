import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';

const PRODUCT_DATA: Product[] = [
  {
    id: '1',
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a1'
  },
  {
    id: '2',
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
];

@Component({
  selector: 'app-product-info-screen',
  templateUrl: './product-info-screen.component.html',
  styleUrls: ['./product-info-screen.component.less']
})
export class ProductInfoScreenComponent implements OnInit {

   public id: string;
   public product!: Product
   public products!: Product[]
    constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.products = PRODUCT_DATA;
    for(let product of this.products){
      if (this.id === product.id){
        this.product = product;
      }
    }
  }

  ngOnInit(): void {
  }

}
