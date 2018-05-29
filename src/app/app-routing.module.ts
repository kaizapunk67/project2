import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {CatalogModule} from './catalog/catalog.module';
import {HomeModule} from './home/home.module';
import {OrderModule} from './order/order.module';
import {ProductsModule} from './products/products.module'

const routes: Routes = [
    {
       path: 'cart',
       loadChildren:'./cart/cart.module#CartModule'
     },
     {
        path: 'catalog',
        loadChildren:'./catalog/catalog.module#CatalogModule'
      },
      {
        path: '',
        loadChildren:'./home/home.module#HomeModule'
      },
      
      {
        path: 'products',
        loadChildren:'./products/products.module#ProductsModule'
      },
      {
        path: 'orders',
        loadChildren:'./order/order.module#OrderModule'
      },
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }