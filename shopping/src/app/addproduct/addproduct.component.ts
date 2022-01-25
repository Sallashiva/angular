import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  error: string;
  message: string;
  isLoding = false;
  constructor(private nani:ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.isLoding=true;
    this.nani.addProducts(form.value).subscribe((res)=>{
  this.isLoding=false
      console.log(res);
      if(!res.error){
        this.message=" product fetched successfully"
        this.nani=res.products;
        setTimeout(()=>{
          this.message='';
        },5000)
      }
      else{
        this.error="could not fetched"
      }
    },err=>{
      this.isLoding=false
      this.error='server error'
    })

     
  }

}
