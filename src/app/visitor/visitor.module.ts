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
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from '../shared/components/category/category.component';
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CategoryScreenComponent,
    NavbarComponent,
    ProductInfoScreenComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class VisitorModule { }
