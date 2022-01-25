import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoding;
  message: any;

  constructor(
    private log:ProductsService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.isLoding=true
    this.log.onLogin(form.value).subscribe((res)=>{
      this.isLoding=false
      if(!res.error){
        localStorage.setItem('userDetails',JSON.stringify(res))
        this.route.navigate(['/product'])
      }
      else{
        this.message=res.message
        if(res.message.toLowerCase().trim()=='no user found'){
          this.route.navigate(['/register'])
        }
      }
    },err=>{
      this.error="somting went worng.."

    })
  }

}
