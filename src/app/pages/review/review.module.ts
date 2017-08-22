import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './review.routing';

import { ReviewComponent } from './review.component';

import { ReviewHomeComponent } from './review-home/review-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        ReviewComponent,
        ReviewHomeComponent,
    ]
})
export class ReviewModule { }