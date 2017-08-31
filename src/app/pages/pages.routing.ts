import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './../service/auth.service';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'admin',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'new', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] },
      { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule', canActivate: [AuthGuard] },
      { path: 'event', loadChildren: './event/event.module#EventModule', canActivate: [AuthGuard] },
      { path: 'coupon', loadChildren: './coupon/coupon.module#CouponModule' , canActivate: [AuthGuard]},
      { path: 'menu', loadChildren: './menu/menu.module#MenuModule' , canActivate: [AuthGuard]},
      { path: 'order', loadChildren: './order/order.module#OrderModule' , canActivate: [AuthGuard]},
      { path: 'review', loadChildren: './review/review.module#ReviewModule', canActivate: [AuthGuard] },
      { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' , canActivate: [AuthGuard]},
      { path: 'type', loadChildren: './type/type.module#TypeModule' , canActivate: [AuthGuard]},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
