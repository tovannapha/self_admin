import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './type.routing';

import { TypeComponent } from './type.component';
import { TypeAllComponent } from './type-all/type-all.component';
// import { TypeRestaurantModule } from './type-restaurant/type-restaurant.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing,
        // TypeRestaurantModule,
    ],
    declarations: [
        TypeComponent,
        TypeAllComponent,
    ]
})
export class TypeModule { }