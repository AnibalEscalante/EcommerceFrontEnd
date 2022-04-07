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


@NgModule({
  declarations: [
    HomeScreenComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CategoryScreenComponent,
    NavbarComponent
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
