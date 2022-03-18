import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'visitor/homepage',
    pathMatch: 'full'
  }, */
  {
    path: 'home',
    component: HomeScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
