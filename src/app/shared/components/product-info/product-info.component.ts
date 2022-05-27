import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

const PRODUCT_DATA: Product[] = [
  {
    _id: '1',
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a1'
  },
  {
    _id: '2',
    brand: 'Panasonic',
    description:'AUDIFONOS Panasonic BT WH-CH510 AZUL',
    price: '$100.000',
    image: 'a2'
  },
  {
    _id:'3',
    brand: 'Motorola',
    description:'AUDIFONOS Motorola BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a3'
  },
  {
    _id:'4',
    brand: 'Apple',
    description:'AUDIFONOS Apple BT WH-CH510 AZUL',
    price: '$1.500.000',
    image: 'a4'
  },
  {
    _id:'5',
    brand: 'Sony',
    description:'AUDIFONOS SONY BT WH-CH510 AZUL',
    price: '$150.000',
    image: 'a5'
  },
];


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.less']
})
export class ProductInfoComponent implements OnInit {

  public id: string;
   public product!: Product
   public products!: Product[]
    constructor(
    private activatedRoute: ActivatedRoute,
    private getProductService: ProductService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.fetchGetProduct()
    this.products = PRODUCT_DATA;
    for(let product of this.products){
      if (this.id === product._id){
        this.product = product;
      }
    }
  }

  async fetchGetProduct() {
    try {
      const response: any = await this.getProductService.getProduct(this.id).toPromise();
      this.product = response.message;
      console.log(this.product);
      

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  ngOnInit(): void {
  }

}
