import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

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
  }

  async fetchGetProduct() {
    try {
      const response: any = await this.getProductService.getProduct(this.id).toPromise();
      this.product = response.message;
      

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  ngOnInit(): void {
  }

}
