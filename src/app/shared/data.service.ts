import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Property } from '../shared';
import { ConfigService } from './config.service';

@Injectable()
export class DataService {
  protected _baseUrl = 'app/';  // URL to web api

  private headers: Headers;

  constructor(protected http: Http, protected configService: ConfigService) {

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

  getProperty(id: number): Observable<Property> {
    return this.http.get(this._baseUrl + 'property/' + id)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }

  save(property: Property): Observable<Property> {
    if (property.id) {
      return this.put(property);
    }
    return this.post(property);
  }

  private post(property: Property): Observable<Property> {
    return this.http.post(this._baseUrl + 'property/', JSON.stringify(property), {
      headers: this.headers
    })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }

  private put(property: Property) {
    return this.http.put(this._baseUrl + 'property/', JSON.stringify(property), {
      headers: this.headers
    })
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
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
}
