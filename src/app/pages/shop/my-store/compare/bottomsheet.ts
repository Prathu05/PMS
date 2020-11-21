import {Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'bottomsheet',
    templateUrl: 'bottomsheet.html',
  })
  export class BottomSheet {
    searched=[];
    models=[];
    constructor(
        private global: GlobalService,
        private main: MainService,
        private _bottomSheet: MatBottomSheet
    ) {
        this.models=this.main.store_products;
    }
    


    selectModel(m){
        this._bottomSheet.dismiss({result:m});
    }

    filterModel(e){
        console.log(e.target.value);
        let v=e.target.value;
        if(v.length<2){
            this.searched=[];
            return;
        }
        
            this.searched = this.models.filter(currentGoal => {   
                console.log(currentGoal); 
                if ((currentGoal.catalog_product.product_name.toLowerCase().indexOf(v.toLowerCase()) > -1)) {
                  return true;
                }
                return false;
                               
            });
    }
  }