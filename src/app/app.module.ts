import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import {HttpModule} from "@angular/http";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {SampleComponent} from "./sample/sample.component";

import '@angular2-material/core/overlay/overlay.css';
import '@angular2-material/core/style/core.css';

import { DataService, ConfigService }  from './shared';

import { PropertyListComponent } from './property-list/';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropertyListComponent
  ],
  providers: [
    DataService, ConfigService
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
