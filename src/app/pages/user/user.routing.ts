import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './User.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { UserAclComponent } from './user-acl/user-acl.component';
import { UserAclResourcesComponent } from './user-acl-resources/user-acl-resources.component';

const routes: Routes = [
  {
    path: '',
    //component: UserComponent,
    children: [
      { path: 'user-home', component: UserHomeComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: 'user-block', component: UserBlockComponent },
      { path: 'user-acl', component: UserAclComponent },
      { path: 'user-acl-resources', component: UserAclResourcesComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);