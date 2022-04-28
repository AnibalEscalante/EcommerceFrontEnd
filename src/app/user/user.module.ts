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
import { MyPersonalInfoComponent } from './views/profile-screens/my-personal-info/my-personal-info.component';
import { MyAddressComponent } from './views/profile-screens/my-address/my-address.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyShoppingComponent } from './views/profile-screens/my-shopping/my-shopping.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddressComponent } from './components/address/address.component';
import { MyPaymentMethodComponent } from './views/profile-screens/my-payment-method/my-payment-method.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    NavbarComponent,
    CategoryScreenComponent,
    BasketScreenComponent,
    ProductInfoScreenComponent,
    ProfileScreenComponent,
    MyPersonalInfoComponent,
    MyAddressComponent,
    SidebarComponent,
    MyShoppingComponent,
    ProductItemComponent,
    AddressComponent,
    MyPaymentMethodComponent,
    PaymentMethodComponent
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
