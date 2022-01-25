import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-loginsecon',
  templateUrl: './loginsecon.component.html',
  styleUrls: ['./loginsecon.component.css']
})
export class LoginseconComponent implements OnInit {
  nani: any;

  constructor(private  routes:Router) {
    
   }

  ngOnInit(): void {
    // this.nani =JSON.parse(localStorage.getItem('Users')
  }

  
  onSubmit(form:NgForm){
    const userDetails=JSON.parse(localStorage.getItem(form.value.email));
    console.log(userDetails);
    
    if(userDetails.email==form.value.email){
      if(userDetails.password==form.value.password){
      this.routes.navigate(['/customgmail'])
      }
    }
    
    

    // if(form.value==this.nani){
      // localStorage.setItem('userDetails',JSON.stringify(form.value))
      // this.routes.navigate(['/customgmail'])
      
    // }
  }
  

}
