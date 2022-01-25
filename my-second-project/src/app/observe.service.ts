import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, filter,map,skip,take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObserveService {
  
  

  createObservable(){
   return new Observable((observer)=>{
     const arr=[1,2,3];
     observer.next(arr)
     const obj={name:'shiva',
    age:21}
    observer.next(obj);
     
      // setTimeout(()=>{
      //   observer.next("packing")
      // },2000);
      // setTimeout(()=> {
      //   observer.next("shipped")
      // },4000);
      // setTimeout(()=>{
      //   observer.next("out for delivery")
      // },5000);
      // setTimeout(()=>{
      //   observer.next("delivery")
      // },6000);
    
    // let count = 0;
    // setInterval(()=>{
    //   count++;
    //   observer.next(count)
    //   // if(count>4){
    //   //   observer.error('iam error..')
    //   // }
    //   if(count>20){
    //     observer.complete()
    //   }

    // },1000)
    // }).pipe(filter((value: any)=>{
    //   if(value % 2 === 0){
    //     return value
    //   }
    // }),map((value)=>{
    //   return 'the count is' + value
      
    // }),take((2)),skip((4)),delay((5000))) 

    // skip((4)))
    //  this for subject
  //   let count=0;

  //   setInterval(()=>{
  //     count++
  //   observer.next(count);
  //     },2000)

   })
  }
  constructor() { }
}
