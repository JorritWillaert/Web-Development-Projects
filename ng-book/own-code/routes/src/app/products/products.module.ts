import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    MoreInfoComponent,
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    MoreInfoComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ProductsModule {}
