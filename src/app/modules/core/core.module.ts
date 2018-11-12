import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';

import { LayoutComponent } from './components/layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductModule } from '../product/product.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        FlexLayoutModule,
        MaterialModule,
        ProductModule,
        CartModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class CoreModule { }
