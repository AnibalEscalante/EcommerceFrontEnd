import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { RegisterScreenComponent } from './views/register-screen/register-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ProductComponent } from '../shared/components/product/product.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CategoryScreenComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class VisitorModule { }
