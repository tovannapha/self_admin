import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './User.component';
import { UserHomeComponent } from './components/user-home/user-home.component';


import { routing } from './User.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UserComponent,
    UserHomeComponent
  ]
})
export class UserModule {}