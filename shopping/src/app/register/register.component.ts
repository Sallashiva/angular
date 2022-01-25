import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoding: any;
  message: any;
  error: string;

  constructor(private regi:ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.isLoding=true;
    this.regi.onRegister(form.value).subscribe((res)=>{
      this.isLoding=false;
      console.log(res);
      
      this.message=res.message;
      form.reset();
    },err=>{
      this.isLoding=false;
      console.log(err);
      this.error="somthing erroe"
      
    })

  }

}
