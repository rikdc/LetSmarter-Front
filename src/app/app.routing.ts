import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent }     from './property-list';
import { PropertyDetailComponent }     from './property-detail';

import { ExpensesListComponent }     from './expenses-list';
import { ExpenseDetailsComponent }     from './expense-details';

import { MaintenanceListComponent } from './maintenance-list';
import { TenantsListComponent } from './tenants-list';

import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './auth/auth.guard'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PropertyListComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'property/:id',
    component: PropertyDetailComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'expenses',
    component: ExpensesListComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'expenses/:id',
    component: ExpenseDetailsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'maintenance',
    component: MaintenanceListComponent,
    canActivate: [AuthGuard] 
  },
    {
    path: 'tenants',
    component: TenantsListComponent,
    canActivate: [AuthGuard] 
  },
];

export const routing = RouterModule.forRoot(appRoutes);

