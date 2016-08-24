import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Property, Maintenance } from '../shared';
import { ConfigService } from './config.service';

@Injectable()
/// <reference path="data.service.ts" />
export class MaintenanceService {
  protected _baseUrl = 'app/';  // URL to web api

  private headers: Headers;

  constructor(protected http: Http, protected configService: ConfigService) {

    this._baseUrl = configService.getApiURI();

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

    protected handleObservableError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    console.log(error);

    if (!serverError.type) {

      for (var key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }

  getMaintenance(): Observable<Maintenance[]> {
    return this.http.get(this._baseUrl + 'maintenance')
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }
}
