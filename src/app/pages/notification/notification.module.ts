import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './notification.routing';

import { NotificationComponent } from './notification.component';

import { NotificationHomeComponent } from './notification-home/notification-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        NotificationComponent,
        NotificationComponent,
        NotificationHomeComponent,
    ]
})
export class NotificationModule { }