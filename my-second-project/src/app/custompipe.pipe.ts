import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe' 

})
export class CustompipePipe implements PipeTransform {

  transform(employess,seachIteam): any {

    if(!employess||!seachIteam) {
     return employess;
  }
  return employess.filter((gan)=>{
    return gan.name.toLowerCase().indexOf(seachIteam.toLowerCase()) !== -1;
  })
}


}
