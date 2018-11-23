import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverDirective } from './directives/mouse-hover.directive';
import { SelectDirective } from './directives/select.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    MouseHoverDirective,
    SelectDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MouseHoverDirective,
    SelectDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
