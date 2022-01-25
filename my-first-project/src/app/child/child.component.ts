import { AfterContentInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,AfterContentInit {
  @Input() getInstructions;
  @Input() nani;
  
  @Output()
  childEvent= new EventEmitter();
  counter: number = 0;
  interval;


  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
     this.counter += 1;
     console.log(this.counter);
     
    },1000)
  }

  replyMethod(event){
    console.log(event.target.value );
    
   this.childEvent.emit(event.target.value);
  }

  ngOnDestroy() {
    clearInterval(this.interval)
    console.log('child ondestroy called'); 
  }
  ngAfterContentInit(): void {
      console.log('hello nani');
      
  }




}
