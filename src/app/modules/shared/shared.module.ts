import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverDirective } from './directives/mouse-hover.directive';
import { SelectDirective } from './directives/select.directive';

@NgModule({
  declarations: [
    MouseHoverDirective,
    SelectDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MouseHoverDirective,
    SelectDirective
  ]
})
export class SharedModule { }
