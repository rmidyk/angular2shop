import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatDividerModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductListItemComponent,
        CartComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule
    ],
    exports: [
        ProductListComponent,
        CartComponent
    ]
})
export class ProductModule { }
