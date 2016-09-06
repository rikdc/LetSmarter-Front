import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { 
    path: 'property', loadChildren: () => System.import('./+property')
  },
  { 
    path: 'expenses', loadChildren: () => System.import('./+expenses') 
  },
  {
    path: 'maintenance', loadChildren: () => System.import('./+maintenance')
  },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent }
];
