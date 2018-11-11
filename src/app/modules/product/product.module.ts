import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductListItemComponent,
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductModule { }
