import { Component, OnInit } from '@angular/core';


interface Product{
  brand: string;
  description: string;
  price: string;
}
const PRODUCT_DATA: Product[] = [
  {
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000'
  },
  {
    brand: 'Panasonic',
    description:'AUDIFONOS Panasonic BT WH-CH510 AZUL',
    price: '$100.000'
  },
  {
    brand: 'Motorola',
    description:'AUDIFONOS Motorola BT WH-CH510 AZUL',
    price: '$150.000'
  },
  {
    brand: 'Apple',
    description:'AUDIFONOS Apple BT WH-CH510 AZUL',
    price: '$1.500.000'
  },
  {
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000'
  },
];

@Component({
  selector: 'app-product-info-screen',
  templateUrl: './product-info-screen.component.html',
  styleUrls: ['./product-info-screen.component.less']
})
export class ProductInfoScreenComponent implements OnInit {

  public products: Product[];
  constructor() { 
    this.products = PRODUCT_DATA;
  }


  ngOnInit(): void {
  }

}
