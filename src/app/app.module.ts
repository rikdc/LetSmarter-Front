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

import { PropertyService, ExpensesService, MaintenanceService, ConfigService }  from './shared';

import { PropertyListComponent } from './property-list/';
import { PropertyFormComponent } from './property-form/';
import { PropertyTenantsListComponent } from './property-tenants-list';
import { ScheduleComponent } from './property-detail/schedule';
import { MaintenanceListComponent } from './maintenance-list';

import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropertyListComponent,
    PropertyFormComponent,
    PropertyTenantsListComponent,
    ScheduleComponent,
    MaintenanceListComponent,
    PaginatePipe, PaginationControlsCmp
  ],
  providers: [
    PropertyService, ExpensesService, MaintenanceService, ConfigService, PaginationService
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
