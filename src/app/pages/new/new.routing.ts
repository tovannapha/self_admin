import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    component: NewComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
];

export const routing = RouterModule.forChild(routes);