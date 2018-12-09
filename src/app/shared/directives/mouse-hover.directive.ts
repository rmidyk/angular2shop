import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  @HostBinding('class')
  className = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.className = 'active';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.className = ''
  }

  constructor() { }

}
