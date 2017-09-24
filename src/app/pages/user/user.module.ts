import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './User.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserBlockComponent } from './components/user-block/user-block.component';


import { routing } from './User.routing';
import { UserAclComponent } from './user-acl/user-acl.component';
import { UserAclResourcesComponent } from './user-acl-resources/user-acl-resources.component';

import { OrderByPipe } from 'angular-pipes/src/array/order-by.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    //UserComponent,
    UserHomeComponent,
    UserAddComponent,
    UserBlockComponent,
    UserAclComponent,
    UserAclResourcesComponent,
    
    //PIPES
    //OrderByPipe
  ]
})
export class UserModule {}