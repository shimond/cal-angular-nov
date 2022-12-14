import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverMe]'
})
export class HoverMeDirective {

  @HostBinding('style.color') currentColor = 'red';

  @HostListener('mouseover', ['$event']) changeColorToGold(e: any) {
    console.log(e);
    this.currentColor = 'gold';
  }

  @HostListener('mouseout') changeColorToRed() {
    this.currentColor = 'red';
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

}
