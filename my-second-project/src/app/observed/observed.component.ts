import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ObserveService } from '../observe.service';

@Component({
  selector: 'app-observed',
  templateUrl: './observed.component.html',
  styleUrls: ['./observed.component.css']
})
export class ObservedComponent implements OnInit {
    status;
  man;
  private subject=new Subject();
  constructor(private observe:ObserveService) { }

  ngOnInit(): void {
  }

  callFunctionCreat(){
    // this.man=this.observe.createObservable().subscribe((status)=>{
    //   console.log(status) 
    // },err=>{
    //   console.log(err);
    //   console.log('somthing');
      
      
    // },()=>{
    //   console.log("completed");
      
    // })
    this.man=this.observe.createObservable().subscribe((status)=>{
      console.log(status); 
    })
    // this for subject
    // this.man=this.observe.createObservable()
  
    //   this.man.subscribe((kal)=>{
    //     this.subject.next(kal)
        
    //   })
    // this.subject.subscribe((data)=>{
    //   console.log('first subscriber' +data);
      
    // })
    
      
  }
   
  // xyz(){

  //   this.subject.subscribe((vala)=>{
  //     console.log('second subscriber'+ vala);
      
  //   })

    //  this.man.subscribe((data)=> {
    //   this.status=data;
    // })
  // }
  // ngOnDestroy(){
  //   this.man.unsubscribe()
  // }

}
