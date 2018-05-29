import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConsultantComponent} from '../consultant/consultant.component';
import {StoreComponent} from '../store/store.component'
@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent  {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(ConsultantComponent, {
      width: '250px',
      
    });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(StoreComponent, {
      width: '250px',
      
    });
  }

}

