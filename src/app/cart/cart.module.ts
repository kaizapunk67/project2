import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { CartRoutingModule } from './cart-routing.module';
import { CartsComponent } from './carts/carts.component';
import { StorageServiceModule} from 'angular-webstorage-service';


@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    StorageServiceModule
  ],
  declarations: [CartsComponent]
})
export class CartModule { }

