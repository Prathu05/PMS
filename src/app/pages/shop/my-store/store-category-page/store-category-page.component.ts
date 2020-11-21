import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-store-category-page',
  templateUrl: './store-category-page.component.html',
  styleUrls: ['./store-category-page.component.scss']
})
export class StoreCategoryPageComponent implements OnInit {
 cat_id:any=1;
  loader=true;
  loader_2=true;
  products=[];
  constructor(

    private route: ActivatedRoute,
    public main: MainService,
    public global: GlobalService
  ) { 
    if(this.route.snapshot.paramMap.get("id"))
      this.cat_id=this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.init();
  }
  init(){
    this.main.getShopProductsByCategory(this.cat_id).then((data:any)=>{
      this.loader_2=false;
      if(data.status)
        this.products=data.result;
      else
        this.products=[];
    });
  } 


  setProduct(product){
    this.main.product=product;
  }

}
