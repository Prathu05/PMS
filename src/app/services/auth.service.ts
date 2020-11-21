import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=new BehaviorSubject(false);
  user:any;
  constructor(
    private http: HttpClient,
    private global: GlobalService,
  ) { }
  login(user, pass){  
    let data={
	    "username": user,
	    "password": pass
    };
    let headers = new HttpHeaders(); 
    return new Promise(resolve => {      
    this.http.post(this.global.BASE_URL +'account/login',JSON.stringify(data), {headers:headers}).subscribe((data:any) => {
        console.log(data);

        this.global.openSnackBar(data.msg);
        if(data.status){
          this.user=data.result;
          localStorage.setItem('token','true');
          localStorage.setItem('user',JSON.stringify(data.result));
          this.isLoggedIn.next(true);
          resolve({status:true});
        }
        else{
          resolve({status:false});
        }
       }, err=>{
        console.log(err);
          resolve({status:false});
       }); 

      });
  }
 
  register(name, b_name, mobile, email, pass, address){  
    let headers = new HttpHeaders(); 
    let data={
	    "name": name,
	    "business_name": b_name,
	    "mobile": mobile,
	    "email": email,
	    "password": pass,
	    "address": address
    };
    return new Promise(resolve => {      
    this.http.post(this.global.BASE_URL +'account/register',JSON.stringify(data), {headers:headers}).subscribe((data:any) => {
        console.log(data);
        this.global.openSnackBar(data.msg);
        if(data.status){
          localStorage.setItem('token','true');
          localStorage.setItem('user',JSON.stringify(data.result));
          this.user=data.result;
          this.isLoggedIn.next(true);
          resolve({status:true});
        }
        else{
          resolve({status:false});
        }
       }, err=>{
        console.log(err);
          resolve({status:false});
       }); 

      });
  }
  checkLogin(){
    if(localStorage.getItem('token')){
        this.isLoggedIn.next(true);
        this.user=JSON.parse(localStorage.getItem('user'));
       // this.updateProfileData();
    }
  }
  logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
				this.global.openSnackBar("Logged out successfully");
        this.isLoggedIn.next(false);
  }
  isAuthenticated(){
		return this.isLoggedIn.value;
  }
  updateProfileData(){
    let headers = new HttpHeaders();
    let id=this.user.id;     
    this.http.get(this.global.BASE_URL +'account/user/'+id+"/",{headers:headers}).subscribe((data:any) => {
      if(data.length>0){
        this.user=data[0];
        localStorage.setItem("user",JSON.stringify(this.user));
      }
    });
  }
}
