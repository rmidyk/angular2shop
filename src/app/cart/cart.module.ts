import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { CartToolbarComponent } from './components/cart-toolbar/cart-toolbar.component';
import { CartOrderComponent } from './components/cart-order/cart-order.component';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';

@NgModule({
    declarations: [
        CartListComponent,
        CartListItemComponent,
        CartToolbarComponent,
        CartOrderComponent,
        CartDialogComponent
    ],
    imports: [
        MaterialModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CartRoutingModule,
    ],
    exports: [
        CartListComponent,
        CartToolbarComponent
    ],
    entryComponents: [CartDialogComponent]
})
export class CartModule { }
