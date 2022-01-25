import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import * as XLSX from 'xlsx'; 
import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  componentPlaces;
  // placeName;
  fileName= 'ExcelSheet.xlsx'; 
  data1:[][] ;


  @ViewChild ('content', {static: false}) ele!: ElementRef;

  constructor(private data:DataService) {

   }

  ngOnInit(): void {
    this.componentPlaces=this.data.places
    
  }
  // sendToService(){
  //   this.data.onRequest(this.placeName)
  
  // }
  convertexel(){

    
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    
    XLSX.writeFile(wb, this.fileName);
   
  }
  savePDF() {
    let pdf =  new jsPDF('p','pt','a4');
    pdf.html ( this.ele.nativeElement,{
         callback : (pdf) => {
           pdf.save("demo.pdf");
         }
    })
  }
  uplodeFile(evt: any){
    const target : DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files')

    const reader : FileReader  = new FileReader();

    reader.onload = (e : any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      console.log(ws);

      this.data1 = (XLSX.utils.sheet_to_json(ws, {header: 1}));

      console.log(this.data1);
      var keys = this.data1.shift();
      const collection = this.data1.map(function (row) {
    return keys.reduce(function (obj, key, i) {
      obj[key] = row[i];
      return obj;
    }, {});
});  
     console.log(collection);
      
      
    }

    reader.readAsBinaryString(target.files[0]);
    
    
      
      
  }
  


  

}
