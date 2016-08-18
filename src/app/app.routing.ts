import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent }     from './property-list';
import { PropertyDetailComponent }     from './property-detail';

import { ExpensesListComponent }     from './expenses-list';
import { ExpenseDetailsComponent }     from './expense-details';

import { MaintenanceListComponent } from './maintenance-list';

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
];

export const routing = RouterModule.forRoot(appRoutes);

