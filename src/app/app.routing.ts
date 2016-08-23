import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent }     from './property-list';
import { PropertyDetailComponent }     from './property-detail';

import { ExpensesListComponent }     from './expenses-list';
import { ExpenseDetailsComponent }     from './expense-details';

import { MaintenanceListComponent } from './maintenance-list';
import { TenantsListComponent } from './tenants-list';

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
  {
    path: 'expenses',
    component: ExpensesListComponent
  },
  {
    path: 'expenses/:id',
    component: ExpenseDetailsComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceListComponent
  },
    {
    path: 'tenants',
    component: TenantsListComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);

