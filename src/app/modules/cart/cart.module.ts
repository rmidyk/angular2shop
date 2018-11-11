import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';

import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        CartComponent
    ]
})
export class CartModule { }
