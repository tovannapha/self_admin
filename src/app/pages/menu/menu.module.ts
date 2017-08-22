import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';

import { MenuComponent } from './menu.component';

import { routing } from './menu.routing';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuRestaurantComponent } from './menu-restaurant/menu-restaurant.component';


@NgModule({
    imports: [
        CommonModule,
        AppTranslationModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        MenuComponent,
        MenuHomeComponent,
        MenuRestaurantComponent,
    ]
})
export class MenuModule { }