import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantComponent } from './Restaurant.component';
import { RestaurantHomeComponent } from './Restaurant-home/Restaurant-home.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantTypeComponent } from './restaurant-type/restaurant-type.component';

import { routing } from './restaurant.routing';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbRatingModule,
        routing
    ],
    declarations: [
        RestaurantComponent,
        RestaurantHomeComponent,
        RestaurantAddComponent,
        RestaurantTypeComponent,
        RestaurantDetailComponent
    ]
})
export class RestaurantModule { }