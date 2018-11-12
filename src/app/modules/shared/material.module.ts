import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav'


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
