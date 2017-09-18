import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

//import { RestaurantComponent } from './Restaurant.component';
import { RestaurantHomeComponent } from './Restaurant-home/Restaurant-home.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantTypeComponent } from './restaurant-type/restaurant-type.component';

import { routing } from './restaurant.routing';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        //RestaurantComponent,
        RestaurantHomeComponent,
        RestaurantAddComponent,
        RestaurantTypeComponent,
        RestaurantDetailComponent,
        RestaurantMenuComponent,
        RestaurantEditComponent
    ]
})
export class RestaurantModule { }