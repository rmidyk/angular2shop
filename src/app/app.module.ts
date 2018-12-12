import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConstantsService, ConstantsServiceInstance } from './core/services/constants.service'

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestTimeInterceptor } from './core/interceptors/request-time.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    LayoutModule,
    ProductsModule,
    CartModule,
    /*LAZY LOADING AdminModule, */
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ConstantsService, useValue: ConstantsServiceInstance },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTimeInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
