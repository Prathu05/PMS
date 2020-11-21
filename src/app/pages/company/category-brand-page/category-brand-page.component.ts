import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category-brand-page',
  templateUrl: './category-brand-page.component.html',
  styleUrls: ['./category-brand-page.component.scss']
})
export class CategoryBrandPageComponent implements OnInit {
  brand_id:any=1;cat_id:any=1;
  loader=true;
  loader_2=true;
  products=[];
  constructor(

    private route: ActivatedRoute,
    public main: MainService,
    public global: GlobalService
  ) { 
    if(this.route.snapshot.paramMap.get("id")){
      let c=this.route.snapshot.paramMap.get("id");
      var x=c.split(",");
      this.cat_id=x[0];
      this.brand_id=x[1];
    }
  }

  ngOnInit(): void {
    this.init();
  }
  init(){
    this.main.getProductsByCategoryBrand(this.cat_id,this.brand_id).then((data:any)=>{
      this.loader_2=false;
      if(data.status)
        this.products=data.result;
      else
        this.products=[];
    });
  } 
}
