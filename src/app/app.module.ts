import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConstantsService, ConstantsServiceInstance } from './modules/core/services/constants.service'

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [
    { provide: ConstantsService, useValue: ConstantsServiceInstance }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
