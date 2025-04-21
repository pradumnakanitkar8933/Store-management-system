import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/api/users';
  private loggedInUser: User | null = null;



  constructor(private http: HttpClient,
    private router: Router) { }

  loginUser(user: User): Observable<any> {
    console.log('Sending login request with credentials:', user);
    return this.http.post(`${this.url}/login`, user).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response);
      })
    );
  }
  storeLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url );
  }

  deleteUserById(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${userId}`, { responseType: 'text' as 'json' });
  }

  public registerUser(user: any) {
    return this.http.post(`${this.url}/add`, user);
  }
  

  // Get the stored logged-in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  updateUserByUsername(username: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${username}/updateUsername`, user);
  }
  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(`${this.url}/api/user/${userId}`);
  }
  searchUsers(searchText: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/api/user/search?searchText=${searchText}`);
  }

  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  updateUserInformation(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/api/user/update/${id}`, user);
  }

  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }

  isAdmin():boolean {
    return localStorage && localStorage.getItem('role') === 'seller' ? true : false;
  }
}