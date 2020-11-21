import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  categories=[];
  brands=[];
  top_products=[];
  product:any;

  store_categories=[];
  store_brands=[];
  store_products=[];
  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private auth: AuthService
  ) { }
  initCategories(){
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'catalog/getAllCategories',{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.categories=data.result;
      }
    });
  }
  initBrands(){
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'catalog/getAllBrands',{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.brands=data.result;
      }
    });
  }
  initProducts(){
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'catalog/getAllProducts',{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.top_products=data.result;
      }
    });
  }


  initShopCategories(){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'shop/getAllCategories?id='+sid,{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.store_categories=data.result;
      }
    });
  }
  initShopBrands(){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'shop/getAllBrands?id='+sid,{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.store_brands=data.result;
      }
    });
  }
  initShopProducts(){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'shop/getAllProducts?id='+sid,{headers:headers}).subscribe((data:any) => {
      if(data.status){
        this.store_products=data.result;
      }
    });
  }


  getProductsByBrand(id){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'catalog/getProductsByBrand?id='+id,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  getShopProductsByBrand(id){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'shop/getProductsByBrand?bid='+id+"&sid="+sid,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }

  getCategoriesByBrand(id){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'catalog/getCategoriesByBrand?id='+id,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }

  getBrandsByCategory(id){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'catalog/getBrandsByCategory?id='+id,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  getProductsByCategory(id){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'catalog/getProductsByCategory?id='+id,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  getShopProductsByCategory(id){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'shop/getProductsByCategory?cid='+id+"&sid="+sid,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  getProductsByCategoryBrand(cid,bid){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'catalog/getProductsByCategoryBrand?cat_id='+cid+'&brand_id='+bid,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  getShopProductByID(id){
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'shop/getProductByID?id='+id,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
  addProductToShop(pid){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    this.http.get(this.global.BASE_URL +'catalog/addProductToShop?pid='+pid+'&sid='+sid,{headers:headers}).subscribe((data:any) => {
      if(data.status&&data.already==false){
        this.global.openSnackBar('Added to your Shop');
      }
      else if(data.status&&data.already){
        this.global.openSnackBar('This product is already added in your Shop');
      }
      else
        this.global.openSnackBar("Something went wrong");
    });
  }
  initDashboard(){
    let sid=this.auth.user.store.id;
    let headers = new HttpHeaders();
    return new Promise(resolve => {      
      this.http.get(this.global.BASE_URL +'shop/initDashboard?id='+sid,{headers:headers}).subscribe((data:any) => {
        resolve(data);
      });
    });
  }
}
