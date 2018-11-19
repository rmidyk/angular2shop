import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {
  @Input('appSelect') borderStyle: string;

  private isClicked: boolean = false;
  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click', ['$event'])
  onHostClick() {
    this.isClicked = !this.isClicked;
    this.el.style.border = this.isClicked ? this.borderStyle : '';
  }
}
