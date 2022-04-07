import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { VisitorRoutingModule } from '../visitor/visitor-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    VisitorRoutingModule
  ]
})
export class SharedModule { }
