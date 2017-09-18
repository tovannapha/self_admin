import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './Event.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventTypeComponent } from './event-type/event-type.component';

const routes: Routes = [
  {
    path: '',
    //component: EventComponent,
    children: [
      { path: '', redirectTo: 'event-home', pathMatch: 'full' },
      { path: 'event-home', component: EventHomeComponent },
      { path: 'event-add', component: EventAddComponent },
      { path: 'event-type', component: EventTypeComponent }
    ] 
  }
];

export const routing = RouterModule.forChild(routes);