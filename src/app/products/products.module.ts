import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule, usersRouterComponents } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDetailsFeedbackComponent } from './components/product-details-feedback/product-details-feedback.component';
import { ProductDetailsPhotosComponent } from './components/product-details-photos/product-details-photos.component';


@NgModule({
    declarations: [
        ...usersRouterComponents,
        ProductListItemComponent,
        ProductDetailsComponent,
        ProductDetailsFeedbackComponent,
        ProductDetailsPhotosComponent
    ],
    imports: [
        MaterialModule,
        SharedModule,
        ProductsRoutingModule
    ]/* ,
    exports: [
        ProductListComponent
    ] */
})
export class ProductsModule { }
