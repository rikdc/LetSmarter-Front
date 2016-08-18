import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { FormsModule }    from '@angular/forms'
import {HttpModule} from "@angular/http";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {SampleComponent} from "./sample/sample.component";

import '@angular2-material/core/overlay/overlay.css';
import '@angular2-material/core/style/core.css';

import { DataService, ExpensesService, MaintenanceService, ConfigService }  from './shared';

import { PropertyListComponent } from './property-list/';
import { PropertyFormComponent } from './property-form/';
import { PropertyTenantsListComponent } from './property-tenants-list';
import { MaintenanceListComponent } from './maintenance-list';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropertyListComponent,
    PropertyFormComponent,
    PropertyTenantsListComponent,
    MaintenanceListComponent
  ],
  providers: [
    DataService, ExpensesService, MaintenanceService, ConfigService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
