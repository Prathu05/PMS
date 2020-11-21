import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTutor implements CanActivate {
    
	constructor(
		private authService: AuthService,
		private global: GlobalService,
		private router: Router
		) { }
	canActivate(): boolean {
		if(this.authService.isAuthenticated()){
			if(this.authService.user.user_role=='tutor')
				return true;
			else{
				this.global.openSnackBar("This is a Student Account, Please sign in with Tutor Account");
				this.router.navigateByUrl('/home');
				return false;
			}
		}
		else{
			this.global.openSnackBar("Login to access this page");
			this.router.navigateByUrl('/login');
			return false;
		}
	}
}
