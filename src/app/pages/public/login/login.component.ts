import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any="";
  password:any="";
  constructor(
    private global: GlobalService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username==""||this.password==""){
      this.global.openSnackBar("Please Fill all details");
      return;
    }
    this.auth.login(this.username, this.password).then((data:any)=>{
      console.log(data);
    });
  }
}
