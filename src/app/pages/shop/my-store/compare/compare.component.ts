import { Component, OnInit } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';
import { BottomSheet } from './bottomsheet';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private main: MainService,
    public global: GlobalService,
    private auth: AuthService,
    private ngNavigatorShareService: NgNavigatorShareService
  ) { }
  compare_list={
    product_1:<any>false,
    product_2:<any>false,
    product_3:<any>false
  };
  attributes=[];
  ngOnInit(): void {
  }

  addProduct(p){
    this.openBottomSheet(p);
    //this.router.navigate(['/compare'],{state:{model:model}});
  }

  openBottomSheet(p): void {
    const bot=this._bottomSheet.open(BottomSheet);
    bot.afterDismissed().subscribe((dataFromChild) => {
      console.log(dataFromChild);
      if(dataFromChild){
//        this.model_2=dataFromChild.result;
          this.fetchProduct(p,dataFromChild.result);
      }
    });
  }

  fetchProduct(p,product){
    this.main.getShopProductByID(product.id).then((data:any)=>{
      if(data.status){
        this.attributes=data.attributes;
        if(p==1){
          this.compare_list.product_1=data.result;
        }
        else if(p==2){
          this.compare_list.product_2=data.result;
        }
        else if(p==3){
          this.compare_list.product_3=data.result;
        }
      }
    });
  }

  getAttributeValue(a,v){
    var index = 0;
    var found;
    var entry;
      for (index = 0; index < a.length; ++index) {
        entry = a[index];
        if (entry.attribute_name == v) {
            found = entry;
            return found.value;
        }
      }
 
  }
  share(){
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    let s="";
    if(this.compare_list.product_1)
      s+=this.compare_list.product_1.id+",";
    
    if(this.compare_list.product_2)
      s+=this.compare_list.product_2.id+",";

      
    if(this.compare_list.product_3)
      s+=this.compare_list.product_3.id+",";
    console.log(s);
    this.ngNavigatorShareService.share({
      title: 'PMS',
      text: 'Hey! I am sharing you the product(s) from '+this.auth.user.store.business_name+" here",
      url: "https://www.pmsstores.in/store/"+this.auth.user.store.slug+"/products/"+s.substr(0,s.length-1),
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }

}
