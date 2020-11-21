import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(
    public main: MainService,
    public global: GlobalService
  ) { 
    
  }

  ngOnInit(): void {
  }

}
