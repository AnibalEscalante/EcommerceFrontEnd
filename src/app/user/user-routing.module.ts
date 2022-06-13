import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoryScreenComponent } from './views/all-category-screen/all-category-screen.component';
import { BasketScreenComponent } from './views/basket-screen/basket-screen.component';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';
import { MyAddressComponent } from './views/profile-screens/my-address/my-address.component';
import { MyPasswordComponent } from './views/profile-screens/my-password/my-password.component';
import { MyPaymentMethodComponent } from './views/profile-screens/my-payment-method/my-payment-method.component';
import { MyPersonalInfoComponent } from './views/profile-screens/my-personal-info/my-personal-info.component';
import { MyShoppingComponent } from './views/profile-screens/my-shopping/my-shopping.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'visitor/homepage',
    pathMatch: 'full'
  }, */
  {
    path: 'home',
    component: HomeScreenComponent
  },
  {
    path: 'category/name/:id',
    component: CategoryScreenComponent,
    
  },
  {
    path: 'category/all/name',
    component: AllCategoryScreenComponent,
    
  },
  {
    path: 'product/:id',
    component: ProductInfoScreenComponent
  },
  {
    path: 'basket',
    component: BasketScreenComponent
  },
  {
    path: 'profile/info',
    component: MyPersonalInfoComponent
  },
  {
    path: 'profile/pass',
    component: MyPasswordComponent
  },
  {
    path: 'profile/myshopping',
    component: MyShoppingComponent
  },
  {
    path: 'profile/myaddress',
    component: MyAddressComponent
  },
  {
    path: 'profile/mypaymentmethod',
    component: MyPaymentMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
