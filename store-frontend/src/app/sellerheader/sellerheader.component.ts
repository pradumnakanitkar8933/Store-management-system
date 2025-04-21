import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sellerheader',
  standalone :false,
  templateUrl: './sellerheader.component.html',
  styleUrl: './sellerheader.component.css'
})
export class SellerheaderComponent {
  url: string = '/';
  userName: string = localStorage.getItem('uname') || '';
  constructor(
    private route: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.url = this.route?.routerState?.snapshot?.url;
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}