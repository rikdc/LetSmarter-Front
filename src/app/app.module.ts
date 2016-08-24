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

import { PropertyService, ExpensesService, MaintenanceService, ConfigService }  from './shared';

import { PropertyListComponent } from './property-list/';
import { PropertyFormComponent } from './property-form/';
import { PropertyTenantsListComponent } from './property-tenants-list';
import { ScheduleComponent } from './property-detail/schedule';
import { MaintenanceListComponent } from './maintenance-list';

import { ExpenseFormComponent } from './expenses-list';

import { TenantsService, TenantsListComponent } from './tenants-list';
import { TenantDetailsComponent } from './tenants-list/tenant-details';

import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';
import {MaterializeDirective} from "angular2-materialize";
import { MaintenanceFormComponent } from './maintenance-list/maintenance-form/maintenance-form.component';
import { ExpensesListItemComponent } from './expenses-list/expenses-list-item/expenses-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropertyListComponent,
    PropertyFormComponent,
    PropertyTenantsListComponent,
    ExpenseFormComponent,
    TenantsListComponent,
    TenantDetailsComponent,
    ScheduleComponent,
    MaintenanceListComponent,
    PaginatePipe, PaginationControlsCmp, MaterializeDirective, MaintenanceFormComponent, ExpensesListItemComponent
  ],
  providers: [
    PropertyService, ExpensesService, MaintenanceService, ConfigService, PaginationService, TenantsService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
