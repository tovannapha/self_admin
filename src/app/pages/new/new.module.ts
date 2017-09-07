import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewComponent } from './new.component';
import { routing } from './new.routing';
import { Test1Component } from './test1/test1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    NewComponent,
    Test1Component
  ]
})
export class NewModule {}