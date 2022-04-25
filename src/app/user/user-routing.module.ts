import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketScreenComponent } from './views/basket-screen/basket-screen.component';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';
import { MyAddressComponent } from './views/profile-screens/my-address/my-address.component';
import { MyPersonalInfoComponent } from './views/profile-screens/my-personal-info/my-personal-info.component';
import { MyShoppingComponent } from './views/profile-screens/my-shopping/my-shopping.component';
import { PaymentMethodComponent } from './views/profile-screens/payment-method/payment-method.component';

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
    path: 'category',
    component: CategoryScreenComponent
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
    path: 'profile/myshopping',
    component: MyShoppingComponent
  },
  {
    path: 'profile/myaddress',
    component: MyAddressComponent
  },
  {
    path: 'profile/mypaymentmethod',
    component: PaymentMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
