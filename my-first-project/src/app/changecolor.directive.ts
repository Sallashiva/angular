import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color="red";
   }
   @HostListener('mouseenter') onMouseEnter(){
     this.nani("yellow");
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.nani("green");
  }
   nani(shiva){
    this.element.nativeElement.style.color=shiva;
   }

}
