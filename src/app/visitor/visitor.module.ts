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
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';
import { NavbarTreeComponent } from './components/navbar-tree/navbar-tree.component';
import { AllCategoryScreenComponent } from './views/all-category-screen/all-category-screen.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CategoryScreenComponent,
    NavbarComponent,
    ProductInfoScreenComponent,
    NavbarTreeComponent,
    AllCategoryScreenComponent
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
