import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  name:any="";
  email:any="";
  mobile:any="";
  address:any="";
  product:any="";
  promoter:any="";
  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(){

  }
}
