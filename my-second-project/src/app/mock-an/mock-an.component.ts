import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-mock-an',
  templateUrl: './mock-an.component.html',
  styleUrls: ['./mock-an.component.css']
})
export class MockAnComponent implements OnInit {
  camer: any;
//  @ViewChild('example') test :ElementRef
 
 
  constructor() { }

  ngOnInit(): void {
    
  }
  // sumbit(){
  // this.test.nativeElement.innerText="hello"

  // }
  incom(val){
    this.camer=val;
  }

}


