import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryScreenComponent } from './views/category-screen/category-screen.component';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { LoginScreenComponent } from './views/login-screen/login-screen.component';
import { RegisterScreenComponent } from './views/register-screen/register-screen.component';

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
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'register',
    component: RegisterScreenComponent
  },
  {
    path: 'category/:name',
    component: CategoryScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
