import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-intract',
  templateUrl: './intract.component.html',
  styleUrls: ['./intract.component.css']
})
export class IntractComponent implements OnInit {
  shiva: any;
  id;
  name;
  brand;
  price;

  constructor(private talk:TalkService) { }

  ngOnInit(): void {
    this.getProduct()

  }
  getProduct(){
    this.talk.getProducts().subscribe((res)=>{
      this.shiva=res
    })
  }
  addProduct(){
    const newObj ={
      id:this.id,
      productName:this.name,
      productBrand:this.brand,
      price:this.price
    }
    this.talk.addSomthing(newObj).subscribe((resb)=>{
      console.log(resb);
      
    })
  }
  update(){
    const newObj ={
      id:this.id,
      productName:this.name,
      productBrand:this.brand,
      price:this.price
    }
    this.talk.addUpdate(this.id,newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }

 
  delate(){
    this.talk.adddelate(this.id).subscribe((resb)=>{
      console.log(resb);

  })
}
}

