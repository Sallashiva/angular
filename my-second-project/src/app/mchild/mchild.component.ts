import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-mchild',
  templateUrl: './mchild.component.html',
  styleUrls: ['./mchild.component.css']
})
export class MchildComponent implements OnInit {
@Output()
 nani= new EventEmitter()
cold=false;
  constructor() { }

  ngOnInit(): void {
}
out(){
this.nani.emit(this.cold=!this.cold)
}
}
