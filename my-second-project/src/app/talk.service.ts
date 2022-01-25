import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<any>('http://localhost:3000/products')
  }
  addSomthing(produ){
    return this.http.post<any>('http://localhost:3000/products',produ )

  }
  addUpdate(id,kumr){
    return this.http.put<any>('http://localhost:3000/products/'+id,kumr)
  }
  
  adddelate(id){
    return this.http.delete<any>('http://localhost:3000/products/'+id )
  }
  
}

