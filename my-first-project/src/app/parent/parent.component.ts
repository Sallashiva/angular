import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  replayData;
  instructions;
  isChild = false;

 

  constructor() { }

  ngOnInit(): void {
  }
  reciveData(event){
    this.replayData=event;
  }

  toggle() {
     this.isChild = !this.isChild
  }

}
