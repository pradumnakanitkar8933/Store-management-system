import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone :false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stockmanagement';
  isLoggedIn: boolean = false;//user:buyer
  isAdminLoggedIn: boolean = false;//admin:seller
  constructor(
    private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      if (typeof localStorage === 'undefined') {
        return;
      }
      const role = localStorage.getItem("role");
      if (role !== null && role === 'buyer') {
        setTimeout(() => {
          this.isLoggedIn = true;
          this.isAdminLoggedIn = false;
        }, 100);
      } else {
        if (role !== null && role === 'seller') {
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLoggedIn = false;
          }, 100);
        } {
          setTimeout(() => {
            this.isLoggedIn = false;
            this.isAdminLoggedIn = false;
          }, 1);
        }
      }
    });
  }

}