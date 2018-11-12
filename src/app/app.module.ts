import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

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
    CoreModule,
    //SharedModule,
    //FlexLayoutModule,
    // ProductModule,
    //CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
