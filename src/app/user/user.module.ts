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
import { MyPersonalInfoComponent } from './views/profile-screens/my-personal-info/my-personal-info.component';
import { MyAddressComponent } from './views/profile-screens/my-address/my-address.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyShoppingComponent } from './views/profile-screens/my-shopping/my-shopping.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddressComponent } from './components/address/address.component';
import { MyPaymentMethodComponent } from './views/profile-screens/my-payment-method/my-payment-method.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { MyPasswordComponent } from './views/profile-screens/my-password/my-password.component';
import { NavbarTreeComponent } from './components/navbar-tree/navbar-tree.component';
import { DistributionItemComponent } from './components/distribution-item/distribution-item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllCategoryScreenComponent } from './views/all-category-screen/all-category-screen.component';
import { PaginatePipe } from '../shared/components/pipes/paginate.pipe';
import { FiltersComponent } from '../shared/components/filters/filters.component';

@NgModule({
  declarations: [
    HomeScreenComponent,
    NavbarComponent,
    CategoryScreenComponent,
    BasketScreenComponent,
    ProductInfoScreenComponent,
    MyPersonalInfoComponent,
    MyAddressComponent,
    SidebarComponent,
    MyShoppingComponent,
    ProductItemComponent,
    AddressComponent,
    MyPaymentMethodComponent,
    PaymentMethodComponent,
    MyPasswordComponent,
    NavbarTreeComponent,
    DistributionItemComponent,
    AllCategoryScreenComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    Ng2SearchPipeModule
    
  ]
})
export class UserModule { }
