import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AssigmentService {

  constructor(private http:HttpClient ) { }

  getProducts(data){
  
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=${data}&from=2021-12-20&sortBy=popularity&apiKey=61124643513c40b682884279bb813731`)
    
  }


}
