import { Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl,FormGroup,Validator, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit{
  estimate:string
  rForm: FormGroup;
  rooms:number;
  width:number;
  height:number;
  surfaceArea:number;
  litres:number;
  price:number;
  constructor(
    public dialogRef: MatDialogRef<EstimateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
      this.rForm = new FormGroup({
        'rooms': new FormControl(null, Validators.required),
        'width': new FormControl(null, Validators.required),
        'height': new FormControl(null,Validators.required)
      });
    }
    onNoClick(): void {
    this.dialogRef.close();
  }
  onNoClick2():void{
      this.rooms = this.rForm.get('rooms').value;
      this.width = this.rForm.get('rooms').value;
      this.height = this.rForm.get('height').value;

      if(this.rooms>0 && this.width>0 && this.height>0){
      this.surfaceArea= this.width*this.height*4;
      this.litres=this.surfaceArea/100;
      this.price= this.litres*this.data;
      }
  }
}
