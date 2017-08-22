import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { NotificationComponent } from './notification.component';

import { NotificationHomeComponent } from './notification-home/notification-home.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: [
      { path: '', redirectTo: 'notification-home', pathMatch: 'full' },
      { path: 'notification-home', component: NotificationHomeComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
