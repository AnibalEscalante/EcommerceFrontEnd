import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ProductComponent,
    FooterComponent
  ],
  exports: [
    FooterComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
