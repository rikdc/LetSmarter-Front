import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { enableProdMode, provide } from '@angular/core';
import { Http, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { FormsModule }    from '@angular/forms'
import {HttpModule} from "@angular/http";

import { AUTH_PROVIDERS, AuthConfig, tokenNotExpired } from 'angular2-jwt';

import { Auth } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthHttp, AuthenticationConnectionBackend } from './shared/authhttp.service';

import { PropertyService, ExpensesService, MaintenanceService, ConfigService, LeaseService }  from './shared';

import { PropertyListComponent, PropertyFormComponent } from './property-list/';
import { PropertyTenantsListComponent } from './property-tenants-list';
import { LeasesComponent, ScheduleComponent } from './property-detail/';

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
    PropertyListComponent,
    PropertyFormComponent,
    PropertyTenantsListComponent,
    ExpenseFormComponent,
    TenantsListComponent,
    TenantDetailsComponent,
    ScheduleComponent,
    MaintenanceListComponent,
    MaintenanceFormComponent,
    PaginatePipe,
    PaginationControlsCmp,
    MaterializeDirective, LeasesComponent
  ],
  providers: [
    PropertyService, 
    ExpensesService, 
    MaintenanceService, 
    ConfigService, 
    PaginationService,
    LeaseService,
    TenantsService,
    { provide: XHRBackend, useClass: AuthenticationConnectionBackend },
    Auth,
    AuthHttp,
    AuthGuard
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
