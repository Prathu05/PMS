import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {

  constructor(

    public main: MainService,
    public global: GlobalService
  ) { }

  ngOnInit(): void {
  }

  setProduct(product){
    this.main.product=product;
  }

}
