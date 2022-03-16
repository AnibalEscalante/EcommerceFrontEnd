import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeScreenComponent } from './views/home-screen/home-screen.component';
import { LandingScreenComponent } from './views/landing-screen/landing-screen.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    LandingScreenComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
