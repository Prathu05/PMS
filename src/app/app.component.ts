import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PMS';
  constructor(
    private auth: AuthService,
    private main: MainService,
    private router: Router
  ){}
  ngOnInit() {
    this.auth.checkLogin();
    this.main.initCategories();
    this.main.initBrands();
    this.main.initProducts();
    this.auth.isLoggedIn.subscribe(state=>{
		  if(state){


        this.main.initShopCategories();
        this.main.initShopBrands();
        this.main.initShopProducts();
			  this.router.navigate(['shop/dashboard'],{ replaceUrl: true });
		  }
		  else{
			  this.router.navigate(['login'],{ replaceUrl: true });
		  }
    });
    
  }
}
