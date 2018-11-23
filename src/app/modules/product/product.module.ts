import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductListItemComponent,
    ],
    imports: [
        MaterialModule,
        SharedModule
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductModule { }
