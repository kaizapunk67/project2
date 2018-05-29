import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {pDetails} from '../../shared/details';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  values:pDetails[]=[];
  public data:any=[]
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }
  ngOnInit() {
    // this.data["productids"]= this.storage.get("productids");
    this.values.push(this.storage.get("productids"))
    // console.log("values in cart: "+this.storage.get("productids"));
    console.log("values in cart:"+JSON.stringify(this.values));
  }
 
}
