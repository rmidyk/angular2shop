import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PathNotFoundComponent, ContactUsComponent, LoginComponent } from './components';

@NgModule({
  declarations: [PathNotFoundComponent, ContactUsComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LayoutModule { }
