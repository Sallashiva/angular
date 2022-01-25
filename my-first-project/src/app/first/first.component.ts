import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  storeValue;
  constructor() { 
    
    
  }

  ngOnInit(): void {
    this.showChart()
  }
  Current=[]
  Invested=[]
  onSubmit(form:NgForm){
    console.log(form.value);
    if(form.value.number1Field){
      this.Current.push(form.value.number1Field)
    }
    if(form.value.numberField){
      this.Invested.push(form.value.numberField)
    }
    this.showChart()
  }
  showChart() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: this.Current,
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: this.Invested,
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }
  

}
