import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { VisitorRoutingModule } from '../visitor/visitor-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/off-canvas/menu/menu.component';
import { OcFiltersComponent } from './components/off-canvas/oc-filters/oc-filters.component';
import { FiltersComponent } from './components/filters/filters.component';


@NgModule({
  declarations: [
    ProductComponent,
    FooterComponent,
    CategoryComponent,
    ProductInfoComponent,
    OcFiltersComponent,
    MenuComponent,
    FiltersComponent
  ],
  exports: [
    FooterComponent,
    ProductComponent,
    CategoryComponent,
    OcFiltersComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    VisitorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
