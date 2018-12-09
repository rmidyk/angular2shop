import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { GeneratorService } from '../../core/services/generate.service';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {
  @Input('appSelect') borderStyle: string;
  private el: HTMLElement;
  constructor(el: ElementRef, private generator: GeneratorService) {
    this.el = el.nativeElement;
  }

  @HostListener('click', ['$event'])
  onHostClick() {
    var color = this.generator.getRandomInt(16777215).toString(16);
    console.log(color);
    this.el.style.backgroundColor = '#' + color;
  }
}
