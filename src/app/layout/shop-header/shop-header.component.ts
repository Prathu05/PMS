import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  showShare=false;
  constructor(
    public auth: AuthService,
    private ngNavigatorShareService: NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    console.log(location.pathname);
    if(location.pathname=='/shop/dashboard'||location.pathname=='/shop/my-store')
      this.showShare=true;
  }
  share() {
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
 
    this.ngNavigatorShareService.share({
      title: 'PMS',
      text: 'Hey! Check all the products from '+this.auth.user.store.business_name+" here",
      url: "https://www.pmsstores.in/"+this.auth.user.store.slug
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  

}
