import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  cat_id:any=1;
  loader=true;
  loader_2=true;
  brands=[];
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
    this.main.getBrandsByCategory(this.cat_id).then((data:any)=>{
      this.loader=false;
      if(data.status)
        this.brands=data.result;
      else
        this.brands=[];
    });
    this.main.getProductsByCategory(this.cat_id).then((data:any)=>{
      this.loader_2=false;
      if(data.status)
        this.products=data.result;
      else
        this.products=[];
    });
  } 

}
