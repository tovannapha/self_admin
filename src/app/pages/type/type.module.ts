import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './type.routing';

import { TypeComponent } from './type.component';

import { TypeRestaurantComponent } from './type-restaurant/type-restaurant.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        TypeComponent,
        TypeRestaurantComponent,
    ]
})
export class TypeModule { }