import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PropertyForm } from './property-form/property-form.component';
import { PropertyList } from './property.component';

import { AppHttp } from '../app.http';
import { AppData } from '../app.data';

console.log('`Property` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: PropertyList, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    PropertyForm,
    PropertyList
  ],
  providers: [
      AppHttp, AppData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class PropertyModule {
  static routes = routes;
}
