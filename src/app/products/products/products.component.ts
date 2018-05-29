import { Component, OnInit ,Inject} from '@angular/core';
import {pDetails} from '../../shared/details';
import {CatalogService} from '../../shared/catalog.service'
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EstimateComponent} from '../../products/estimate/estimate.component';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[CatalogService]
})
export class ProductsComponent implements OnInit {
  newHer:pDetails;
  constructor(private appService:CatalogService,private route:ActivatedRoute,private router:Router,public dialog: MatDialog,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  catalogid:number;
  price:number;
  productid:any;
  productid2:pDetails;
  values:pDetails[]=[];
  ngOnInit() {
    this.route.params.subscribe(params=>this.catalogid=+params["catalogid"]);
        if(this.catalogid!=null && ! isNaN(this.catalogid)){
        this.appService.getproductsbyid(this.catalogid).
        subscribe((data) =>{
          this.newHer = data;
        });
    }
    else{
      this.appService.getproducts().
      subscribe(data=>{this.newHer = data});
    }
    
  }

  openDialog(x): void {
    let dialogRef = this.dialog.open(EstimateComponent, {
      width: '250px',
      data:x
      
      });
    console.log(x) ;
  }
  openProduct(x):void{
    this.productid=x
    this.router.navigate(['/products/qproducts/'+this.productid])
  }
  cartdetails(x):void{
    this.productid2=x
    // console.log(this.productid2)
    this.values.push(this.productid2);
    console.log("values:"+JSON.stringify(this.values))
    // this.values.push(this.storage.get("productids"));


    let temp = [];
    temp.push(this.storage.get("productids"));
    temp.push(this.values)
    this.storage.set("productids", temp);
    

  }
}
