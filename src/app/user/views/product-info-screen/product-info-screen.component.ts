import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';


@Component({
  selector: 'app-product-info-screen',
  templateUrl: './product-info-screen.component.html',
  styleUrls: ['./product-info-screen.component.less']
})
export class ProductInfoScreenComponent implements OnInit {
  public id: string | null;
  constructor(
    public productService: ProductService
  ) {
    this.id = null;
  }
  
  ngOnInit(): void {
    
  }



}
