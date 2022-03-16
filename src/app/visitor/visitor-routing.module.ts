import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './views/landing-screen/landing-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/homepage',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
