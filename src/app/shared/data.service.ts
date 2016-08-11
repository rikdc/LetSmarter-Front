import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Property } from '../shared';
import { ConfigService } from './config.service';

@Injectable()
export class DataService {
  private _baseUrl = 'app/heroes';  // URL to web api

  private headers: Headers;

  constructor(private http: Http, private configService: ConfigService) {

    this._baseUrl = configService.getApiURI();

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getProperties(): Observable<Property[]> {
    return this.http.get(this._baseUrl + 'property')
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }

  private handleObservableError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    console.log(error);

    if (!serverError.type) {

      for (var key in serverError) {
        if (serverError[key])
          modelStateErrors += serverError[key] + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
