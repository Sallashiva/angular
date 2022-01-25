import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private route:Router) { }

getProducts(){
    // return this.http.get<any>('https://ty-shop.herokuapp.com/api/products')
    return this.http.get<any>(`${environment.baseURL}/api/products`)
    
  }
  addProducts(product){
  
    return this.http.post<any>(`${environment.baseURL}/api/products`,product)
    
  }
  addDelete(id){
  
    return this.http.delete<any>(`${environment.baseURL}/api/products/${id}`)
    
  }
  addUpdate(id,product){
  
    return this.http.put<any>(`${environment.baseURL}/api/products/${id}`,product)
    
  }
  onRegister(userDetails){
    
    return this.http.post<any>(`${environment.baseURL}/api/users/register`,userDetails)

  }
  onLogin(cerdit){
    
    return this.http.post<any>(`${environment.baseURL}/api/users/login`,cerdit)

  }
  getUserDetails(){
    const userDetails=JSON.parse(localStorage.getItem('userDetails'));
    if(userDetails){
      return userDetails;
    }
  }
  isAdmin(){
   const userDetails=this.getUserDetails();
   if(userDetails && userDetails.role ==='admin'){
     return true
   }
  }
  isUser(){
    if(this.getUserDetails().role==='user'){
      return true
    }
  }
  isLoggedIn(){
    if(this.getUserDetails()){
      return true
    }
  }
  logout(){
   
    const confirmation =confirm("are you u sure logout");
    if(confirmation){
      localStorage.clear();
   this.route.navigate(['/login'])

    }
  }
  getToken(){
    const userDetails=this.getUserDetails();
    if(userDetails && userDetails.token){
      return userDetails.token
    }
  }
  
}
