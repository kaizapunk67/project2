import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogsComponent} from './catalogs/catalogs.component';

const routes: Routes = [
  {
    path:'',component:CatalogsComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
