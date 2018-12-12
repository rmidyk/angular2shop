import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';
import { AppSettingsService } from './services/app-settings.service';
import { APP_INITIALIZER } from '@angular/core';

export function initializeApp(appConfig: AppSettingsService) {
    return () => appConfig.getOptions();
}

@NgModule({
    imports: [
    ],
    exports: [
    ],
    providers: [
        AppSettingsService, {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppSettingsService], multi: true
        }
    ]
})
export class CoreModule { }
