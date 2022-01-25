import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customgmail',
  templateUrl: './customgmail.component.html',
  styleUrls: ['./customgmail.component.css']
})
export class CustomgmailComponent implements OnInit {
  kumar: any;
  resultArray: any[];
  talk;
  kasti: any;
  @ViewChild('close') closeButton:ElementRef
  userDetails: any;
  userDetails2: any;


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    // console.log(form.value);
   this.talk=form.value
   console.log(this.talk);
   
   
    localStorage.setItem(form.value.text,JSON.stringify(form.value));


   this.userDetails=JSON.parse(localStorage.getItem(form.value.text));
  console.log(this.userDetails);
  this.userDetails2=JSON.parse(localStorage.getItem(form.value.email));
  console.log(this.userDetails2);
  
    

    this.kumar=form.value
    this.resultArray = Object.keys(this.kumar).map(index => {
      let person = this.kumar[index];
      return person;
      
      
      
    
  })

}
vasthu2(){
 
  
  
    if(this.userDetails2.email==this.userDetails.email1){
      
        this.kasti=Object.keys(this.userDetails).map(index => {
          let person = this.userDetails[index];
          return person;
          
          
        
      })

      
  
    }
  

}
}
