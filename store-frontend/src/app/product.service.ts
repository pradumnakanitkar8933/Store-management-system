import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 

  navigateToLink(arg0: string) {
    this.router.navigate(['/'+ arg0]);
  }
 
  private loginUrl = 'http://localhost:8080/api/products';
  private loginUrl1 = 'http://localhost:8080/api/categories';
  constructor(private router:Router, private httpClient:HttpClient) { }

  
  getAllProduct(): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}`);
  }

  deleteProductById(pid:any):Observable<any>{
    return this.httpClient.delete(`${this.loginUrl}/${pid}`);
  }

  addProduct(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/add`, body);
   }

  

  getProductById(id: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/${id}`);
  }

  getCategoryList(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(`${this.loginUrl1}/all`);
  }

  addCategory(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl1}/add`, body, { responseType: 'text' });
   }

  updateProduct(body: any): Observable<any>{
    return this.httpClient.put(`${this.loginUrl}/update`,body);
  }
  
}