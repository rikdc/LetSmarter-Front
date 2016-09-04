import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LeasesComponent } from './property-detail/leases/leases.component';
import { PropertySchedule } from './property-detail/schedule';
import { PropertyDetail } from './property-detail/property-detail.component';
import { PropertyForm } from './property-form/property-form.component';
import { PropertyList } from './property.component';

import { SharedModule } from '../app.shared';

import { AppHttp } from '../app.http';
import { AppData } from '../app.data';

console.log('`Property` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: PropertyList, pathMatch: 'full' },
  { path: ':id', component: PropertyDetail, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LeasesComponent,
    PropertySchedule,
    PropertyDetail,
    PropertyForm,
    PropertyList,
  ],
  providers: [
      AppHttp, AppData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class PropertyModule {
  static routes = routes;
}
