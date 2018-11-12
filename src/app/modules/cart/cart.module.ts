import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';

import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';

@NgModule({
    declarations: [
        CartListComponent,
        CartListItemComponent
    ],
    imports: [
        MaterialModule,
        SharedModule
    ],
    exports: [
        CartListComponent
    ]
})
export class CartModule { }
