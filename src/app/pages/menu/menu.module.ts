import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { MenuComponent } from './menu.component';

import { routing } from './menu.routing';
import { MenuHomeComponent } from './menu-home/menu-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        MenuComponent,
        MenuHomeComponent,
    ]
})
export class MenuModule { }