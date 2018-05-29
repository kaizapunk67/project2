import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { HomesComponent } from './homes/homes.component';
import { AboutComponent } from './about/about.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { StoreComponent } from './store/store.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [HomesComponent, AboutComponent, ConsultantComponent, StoreComponent],
  entryComponents:[ConsultantComponent]
})
export class HomeModule { }
