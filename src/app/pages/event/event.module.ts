import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './Event.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventTypeComponent } from './event-type/event-type.component';

import { routing } from './event.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        //EventComponent,
        EventHomeComponent,
        EventAddComponent,
        EventTypeComponent
    ]
})
export class EventModule { }