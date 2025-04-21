import { Component } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone : false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string  = '';
  user: User = new User(0,'','','','');
  constructor(private authService: AuthService, private router: Router ) {
    
  }
 
  onSubmit() {
    if (this.user.userName === '') {
      this.errorMessage = 'User name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
   
   
    if (this.user.email === '' ) {
      this.errorMessage = 'Email should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const regularExpression = /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    if (!regularExpression.test(this.user.email)) {
      document.getElementById('errordiv')?.scrollIntoView(true);
      this.errorMessage = 'Email is not valid';
      return;
    }
   
    const passwordPatter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (!passwordPatter.test(this.user.password)) {
      alert('Password must have minimum eight characters, at least one letter and one number, one special chracter');
      return
    }
    // this.user.role="user";
    // console.log('>>>>>', this.user)

    this.errorMessage = '';
   
//  this.user.role = "seller";
this.user.role = "buyer"; 
 console.log(this.user);
 const payload={
  userName:this.user.userName,
   email:this.user.email,
  password:this.user.password,
  role:this.user.role
 }
    this.authService.registerUser(payload).pipe(take(1)).subscribe(
      (data:any ) => {
        alert("User created with account");
        this.router.navigate(['/login']);
      }, error => {
       
        const message = error?.error?.message;
        console.log("************",message)
        if (message && message.includes('[Duplicate entry ')) {
          alert("Username / Email / Mobile already available. Please use differnt one.");
        } else {
          alert("Something went wrong while registration.");
        }
      }
      
    )
  }

  goBack() {
    this.router.navigate(['/login']); // Replace 'login' with the actual path to your login page
  }
}