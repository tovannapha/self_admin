import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './User.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserBlockComponent } from './components/user-block/user-block.component';


import { routing } from './User.routing';
import { UserAclComponent } from './user-acl/user-acl.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UserComponent,
    UserHomeComponent,
    UserAddComponent,
    UserBlockComponent,
    UserAclComponent
  ]
})
export class UserModule {}