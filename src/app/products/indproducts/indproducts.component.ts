import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {CatalogService} from '../../shared/catalog.service'
import {pDetails} from '../../shared/details';

@Component({
  selector: 'app-indproducts',
  templateUrl: './indproducts.component.html',
  styleUrls: ['./indproducts.component.css']
})
export class IndproductsComponent implements OnInit {

  constructor(private appService:CatalogService,private route:ActivatedRoute) { }
  productid:number;
  newHer:pDetails

  ngOnInit() {
    this.route.params.subscribe(params=>this.productid=+params["productid"]);
    this.appService.getproductdetailsbyid(this.productid).
        subscribe((data) =>{
          this.newHer = data;
        });
  }

}
