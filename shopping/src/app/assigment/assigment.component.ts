import { Component, OnInit } from '@angular/core';
import { AssigmentService } from '../assigment.service';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {
  placeName = '';
  theComp;
  isLoding;
  message: string;
  status: any;
  error: string;
  noText = false;

  constructor(public assig:AssigmentService) { }

  ngOnInit(): void {

  }
  sendToService(){
    if(this.placeName.trim() == '') {
      this.noText = true;
    }
    else{
    
    this.isLoding=true

   this.assig.getProducts(this.placeName).subscribe((res)=>{
     this.isLoding=false;
      console.log(res);
      if(res.status){
        this.message=" product fetched successfully"
      this.theComp=res.articles
      setTimeout(()=>{
        this.message='';
      },5000)
    }
    else{
      this.status="could not fetched"
    }
      
    },err=>{
      this.isLoding=false
      this.error='server error'
    })

  }
  }



}
