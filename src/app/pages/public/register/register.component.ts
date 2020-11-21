import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private global: GlobalService,
    private auth: AuthService
  ) { }
  name:any="";
  business_name:any="";
  mobile:any="";
  email:any="";
  address:any="";
  password:any="";
  ngOnInit(): void {
  }
  register(){
    if(this.name==""||this.password==""||this.business_name==""||this.email==""||this.address==""||this.mobile==""){
      this.global.openSnackBar("Please Fill all details");
      return;
    }
    this.auth.register(this.name,this.business_name,this.mobile,this.email, this.password, this.address).then((data:any)=>{
      console.log(data);
    });
  }

}
