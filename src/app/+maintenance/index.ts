import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaintenanceForm } from './maintenance-form/maintenance-form.component';
import { MaintenanceList } from './maintenance-list.component';

import { SharedModule } from '../app.shared';

import { AppHttp } from '../app.http';
import { AppData } from '../app.data';

console.log('`Maintenance` bundle loaded asynchronously');

export const routes = [
  { path: '', component: MaintenanceList, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MaintenanceForm,
    MaintenanceList,
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
export default class MaintenanceModule {
  static routes = routes;
}
