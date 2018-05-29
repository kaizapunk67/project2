import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

import {MatCardModule} from '@angular/material/card';
import { EstimateComponent } from './estimate/estimate.component';

import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { IndproductsComponent } from './indproducts/indproducts.component';
import { StorageServiceModule} from 'angular-webstorage-service';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,StorageServiceModule,
    MatFormFieldModule,FormsModule, ReactiveFormsModule,MatDialogModule,MatInputModule
  ],
  declarations: [ProductsComponent, EstimateComponent, IndproductsComponent],
  entryComponents:[EstimateComponent]
})
export class ProductsModule { }
