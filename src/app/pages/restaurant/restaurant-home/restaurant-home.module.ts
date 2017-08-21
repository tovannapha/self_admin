import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../../theme/nga.module';

import { RestaurantHomeComponent } from './Restaurant-home.component';
/* import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantTypeComponent } from './restaurant-type/restaurant-type.component'; */

import { routing } from './restaurant-home.routing';
import { RestaurantDetailComponent } from './../restaurant-detail/restaurant-detail.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbRatingModule,
        NgaModule,
        routing
    ],
    declarations: [
        RestaurantHomeComponent,
        RestaurantDetailComponent
    ]
})
export class RestaurantModule { }