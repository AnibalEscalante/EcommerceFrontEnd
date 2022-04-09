import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketScreenComponent } from './views/basket-screen/basket-screen.component';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { ProductInfoScreenComponent } from './views/product-info-screen/product-info-screen.component';
import { ProfileScreenComponent } from './views/profile-screen/profile-screen.component';

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
    path: 'profile',
    component: ProfileScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
