import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class SellerguardService implements CanActivate {
  constructor( public router: Router) {
  }

  canActivate(): boolean {
      if (!this.isAuthenticated()) {
          this.router.navigate(['/login']);
          return false;
      } else {
          return true;
      }
  }

  isAuthenticated() {
      let isAuth: boolean = false;
      if (typeof localStorage !== 'undefined') {
         console.log("*ITEM*",localStorage.getItem('role'));
          isAuth = localStorage.getItem('role') === 'seller' ? true : false;
      }
      console.log("***",isAuth);
      return isAuth;
  }
}