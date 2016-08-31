import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import "materialize-css";
import { AppModule }              from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);