import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './order.routing';

import { OrderComponent } from './order.component';

import { OrderHomeComponent } from './order-home/order-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        OrderComponent,
        OrderHomeComponent,
    ]
})
export class OrderModule { }