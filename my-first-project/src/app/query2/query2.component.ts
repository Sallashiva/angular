import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit,AfterViewInit,AfterContentInit {
@ViewChild('example') heading:ElementRef
@ViewChildren('example') headings:QueryList<any>
@ContentChild('sample') test:ElementRef
@ContentChildren('sample') tests:QueryList<any>
  constructor() { }

  ngOnInit(): void {
    // console.log(this.heading);
    // console.log(this.test);
    // console.log(this.tests);
    // console.log(this.headings);
    
    
    
    
  }
  ngAfterViewInit(){
    console.log(this.heading.nativeElement.innerText);
    console.log(this.headings);
    this.heading.nativeElement.innerText="hello"
    this.headings.forEach((element)=>{
      console.log(element.nativeElement.innerText);

    })
    }
    ngAfterContentInit(){
      console.log(this.test.nativeElement.innerText);
      console.log(this.tests);
      this.test.nativeElement.innerText='nani'
      this.tests.forEach((element)=>{
      //  alert(element.nativeElement.innerText);
      console.log(element.nativeElement.innerText);
    
    
        })
      


      
    }

}
