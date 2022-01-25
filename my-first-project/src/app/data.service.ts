import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  places= [
    {
      name:'bangulue',
     distance:200,
    waether:'cool'
  },
  {
    name:'goa',
     distance:2000,
    waether:'chill'
  },
  {
    name:'viza',
     distance:500,
    waether:'humi'
  }
  ]


  constructor() { }
  onRequest(data){
    console.log(`hello ${data}`);
    
  }
  callingFromHtml(){
    console.log('the method is called from html');
    
  }

}
