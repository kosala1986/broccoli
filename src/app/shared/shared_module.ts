import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    declarations: [
        TopBarComponent,
        BottomBarComponent,
    ],
    exports: [
        TopBarComponent,
        BottomBarComponent,
    ],
})
export class SharedModule { }