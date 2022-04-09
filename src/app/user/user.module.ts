import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { BasketScreenComponent } from './views/basket-screen/basket-screen.component';
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileScreenComponent } from './views/profile-screen/profile-screen.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    NavbarComponent,
    CategoryScreenComponent,
    BasketScreenComponent,
    ProductInfoScreenComponent,
    ProfileScreenComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class UserModule { }
