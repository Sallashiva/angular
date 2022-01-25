import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    // user:any={};
  constructor(private routes:Router) {
    
    
   }

  ngOnInit(): void {}

  onSubmit(form:NgForm){
    console.log(form.value);
    localStorage.setItem(form.value.email,JSON.stringify(form.value));
    // this.user=Object.assign(this.user,form.value);
    // this.addUser(this.user);
    if(form.value){
      this.routes.navigate(['/loginsecon'])
    }
  }

  // addUser(user) {
  //   let users = [];
  //   if (localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users =  [user,...users];
  //   } else {
  //     users = [user];
  //   }
  //   localStorage.setItem('Users',JSON.stringify(user));
  // }
}
