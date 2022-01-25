import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  costemerName;
  costemerAge=30;
  notAvilabl=true;
  details=false;
  textcolor= 'blue'

  constructor() { }

  ngOnInit(): void {
  }
  swemmingPool(){
    if(this.costemerAge >=21){
      return true;
    }
    else{
      return false;
    }
  }
  pubPass(){
    if(this.costemerAge >=21){
      return true;
    }
    else{
      return false;
    }

  }
  detailSubmition(){
    this.details=true;
  }
  // empDetails =[
  //   {
  //     empName:'danna',
  //     empAge:15,
  //     designation:'ceo'
  //   },
  //   {
  //     empName:'shravan',
  //     empAge: 14,
  //     designation:'manager'
  //   },
  //   {
  //     empName:'shiva',
  //     empAge:16,
  //     designation:'direactiva'
  //   }
  // ]
  // swemmingPool(){
  //   if(this.costemerAge >=21){
  //     return 'green';
  //   }
  //   else{
  //     return 'red';
  //   }
  // }
  // pubPass(){
  //   if(this.costemerAge >=21){
  //     return 'green';
  //   }
  //   else{
  //     return 'red';
  //   }

  // }
  // swemmingPool(){
  //   if(this.costemerAge >=21){
  //     return 'success';
  //   }
  //   else{
  //     return 'faliur';
  //   }
  // }
  // pubPass(){
  //   if(this.costemerAge >=21){
  //     return 'success';
  //   }
  //   else{
  //     return 'faliur';
  //   }

  // }

}
