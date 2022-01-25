import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(product,seachIteam): any {
    if(!product||!seachIteam) {
      return product;
   }
   return product.filter((gan)=>{
     return gan.productName.toLowerCase().indexOf(seachIteam.toLowerCase()) !== -1;
   })
  }

}
