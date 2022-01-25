import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  constructor(private nani:CaseService) { }
    gender;
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
//     this.nani.addProducts(form.value).subscribe((res)=>{
//  lo
     
  }


}
