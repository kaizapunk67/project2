import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogService} from '../shared/catalog.service'
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogsComponent } from './catalogs/catalogs.component';
import 'rxjs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatCardModule
  ],
  declarations: [CatalogsComponent],
  providers:[CatalogService]
})
export class CatalogModule { 

}
