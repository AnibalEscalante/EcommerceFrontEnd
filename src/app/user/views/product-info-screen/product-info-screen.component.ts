import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Product{
  id: string;
  brand: string;
  description: string;
  price: string;
  image: string;
}
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
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
