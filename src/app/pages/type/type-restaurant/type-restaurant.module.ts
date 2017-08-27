import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NgaModule } from '../../theme/nga.module';

import { TypeRestaurantComponent } from './type-restaurant.component';
import { TypeRestaurantHomeComponent } from './type-restaurant-home/type-restaurant-home.component';
import { TypeRestaurantAddComponent } from './type-restaurant-add/type-restaurant-add.component';

import { routing } from './type-restaurant.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // NgaModule,
        routing,
    ],
    declarations: [
        TypeRestaurantComponent,
        TypeRestaurantHomeComponent,
        TypeRestaurantAddComponent,
    ],
})
export class TypeRestaurantModule { }
