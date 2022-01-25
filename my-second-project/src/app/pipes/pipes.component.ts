import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  seachIteam;
  date=new Date();
  constructor() { }

  ngOnInit(): void {
  }
//   empDate = {
//     empName:'shiva',
//     empSalary:50000,
//     DOB :'8/8/1997',
//     designation : 'dance'
//  }

empData = [
  {
   name:"shiva",
   salary:5000,
   role :'dancer'
  },
  {
    name:"nani",
    salary:4000,
    role :'singer'
   },
   {
    name:"kumar",
    salary:6000,
    role :'player'
   }
]

}
