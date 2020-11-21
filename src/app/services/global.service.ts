import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  BASE_URL="https://www.careasy.in/catalog/api/pms/";
  ASSETS_URL="https://www.careasy.in/pms_assets/";
  user:any;
  settings:any;
  constructor(
    private _snackBar: MatSnackBar
  ) { }
  openSnackBar(message: string, action: string="") {
    this._snackBar.open(message, "Dismiss", {
      duration: 4000,
    });
  }
}
