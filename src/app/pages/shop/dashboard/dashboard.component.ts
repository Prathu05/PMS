import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats={
    orders:0,
    revenue:0,
    products:0,
    views:0,
    open_orders:0,
    shares:0
  };
  constructor(
    private auth: AuthService,
    private main: MainService,
  ) { }

  ngOnInit(): void {
    this.init();
  }
  init(){
    this.main.initDashboard().then((data:any)=>{
      if(data.status){
      this.stats.orders=data.result.orders;
      this.stats.products=data.result.products;
      this.stats.views=data.result.views;
      this.stats.revenue=data.result.revenue;
      this.stats.open_orders=data.result.open_orders;
      this.stats.shares=data.result.shares;
      }
    });
  }


logout(){
  this.auth.logout();
}
}
