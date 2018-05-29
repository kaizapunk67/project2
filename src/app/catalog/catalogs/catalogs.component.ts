import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../shared/catalog.service'
import {Details} from '../../shared/details'
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  providers:[CatalogService]
})
export class CatalogsComponent implements OnInit {
  newHero:Details;
  catalogid:number;
  constructor(private appService:CatalogService,private router:Router ) { }
  y:string;
  obj:Details
   ngOnInit() {
    this.appService.getdetails()
    .subscribe(data=> {this.newHero = data;
    });
  }
  open(data){
    console.log(data);
    this.catalogid =data
    this.router.navigate(['/products/pproducts/'+this.catalogid]);
  }
}
