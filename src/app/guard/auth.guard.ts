import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
	constructor(
		private authService: AuthService,
		private global: GlobalService,
		private router: Router
		) { }
	canActivate(): boolean {
		if(this.authService.isAuthenticated()){
		/*	if(this.authService.user.user_role=='student')
				return true;
			else{
				this.global.openSnackBar("This is a Tutor Account, Please sign in with Student Account");
				this.router.navigateByUrl('/home');
				return false;
			}
			*/
			return true;
		}
		else
			return false;
	}
}
