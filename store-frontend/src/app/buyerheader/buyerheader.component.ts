import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-buyerheader',
  standalone :false,
  templateUrl: './buyerheader.component.html',
  styleUrl: './buyerheader.component.css'
})
export class BuyerheaderComponent {
  url: string = '/';
  user: User = new User(0,"","","","");
  constructor(
    private route: Router,
    private authService: AuthService
  ) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo !== null) {
      this.user = JSON.parse(userInfo);
    }
  }


  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}
