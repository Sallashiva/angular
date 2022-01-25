import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  nani: any;
  error: string;
  isLoding;
  message: string;
  selectedProductToEdit: any;
  seachIteam;
  @ViewChild('close') closeButton:ElementRef

  constructor(private shiva:ProductsService) { }

  ngOnInit(): void {
  this. getAllaProduct();
  }
  getAllaProduct(){
    this.isLoding=true
    this.shiva.getProducts().subscribe((res)=>{
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
  onDelete(kuma){
    const confirmation= confirm('are you sure confirm')
    if(confirmation){
    this.shiva.addDelete(kuma._id).subscribe((res)=>{
      console.log(res);
      
      if(!res.error){
      this.nani.splice(this.nani.indexOf(kuma),1)
    }

    })
  }

  }
  OnEditProduct(kuma){
    
    this.selectedProductToEdit=kuma;
  }
  onFormSubmit(){
    this.shiva.addUpdate(this.selectedProductToEdit._id,this.selectedProductToEdit).subscribe((res)=>{
      console.log(res);
      
     if(!res.error){
       this.closeButton.nativeElement.click()
     }
    })
    }

}
