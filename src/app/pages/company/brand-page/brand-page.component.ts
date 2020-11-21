import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  brand_id:any=1;
  loader=true;
  loader_2=true;
  products=[];
  constructor(

    private route: ActivatedRoute,
    public main: MainService,
    public global: GlobalService
  ) { 
    if(this.route.snapshot.paramMap.get("id"))
      this.brand_id=this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.init();
  }
  init(){
    this.main.getProductsByBrand(this.brand_id).then((data:any)=>{
      this.loader_2=false;
      if(data.status)
        this.products=data.result;
      else
        this.products=[];
    });
  } 

}
