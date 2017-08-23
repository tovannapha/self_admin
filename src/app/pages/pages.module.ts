import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { NewComponent } from './new/new.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Pages,
    UserComponent,
    RestaurantComponent,
    EventComponent,
  ]
})
export class PagesModule {
}
