import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent }     from './property-list';
import { PropertyDetailComponent }     from './property-detail';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PropertyListComponent
  },
  {
    path: 'property/:id',
    component: PropertyDetailComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);

