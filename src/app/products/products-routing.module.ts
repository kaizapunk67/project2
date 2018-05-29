import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {IndproductsComponent} from './indproducts/indproducts.component'
const routes: Routes = [
  {
    path:'',component:ProductsComponent
  },
  {
    path: 'pproducts/:catalogid',
    component:ProductsComponent
  },
  {
    path:'qproducts/:productid',
    component:IndproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
