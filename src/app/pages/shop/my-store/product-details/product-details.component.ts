import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(
    private main: MainService,
    public global: GlobalService,
    private auth: AuthService,
    private ngNavigatorShareService: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.product=this.main.product.catalog_product;
  }
  share(){
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
    let s=this.product.id;
    
    this.ngNavigatorShareService.share({
      title: 'PMS',
      text: 'Hey! I am sharing you the product(s) from '+this.auth.user.store.business_name+" here",
      url: "https://www.pmsstores.in/store/"+this.auth.user.store.slug+"/products/"+s,
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
