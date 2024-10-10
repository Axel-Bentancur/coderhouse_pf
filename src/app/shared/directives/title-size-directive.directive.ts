import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleSizeDirective]'
})
export class TitleSizeDirectiveDirective {

  constructor(private el: ElementRef<HTMLElement>) {
    this.applyStyles();
  }

  applyStyles(): void {
    this.el.nativeElement.style.fontSize = "20px"
  }
}
