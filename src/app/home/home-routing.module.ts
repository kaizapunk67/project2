import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomesComponent } from './homes/homes.component'
import { AboutComponent } from './about/about.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {StoreComponent} from './store/store.component'

const routes: Routes = [
  {
    path:'',component:HomesComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'consult',component:ConsultantComponent
  },
  {
    path:'store',component:StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
