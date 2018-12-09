import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatIconModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatTabsModule,
        MatMenuModule,
        MatDialogModule,
        MatBadgeModule,
        MatStepperModule
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatTabsModule,
        MatMenuModule,
        MatDialogModule,
        MatBadgeModule,
        MatStepperModule
    ]
})
export class MaterialModule { }
