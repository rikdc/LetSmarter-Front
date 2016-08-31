import { Injectable }    from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Property } from '../shared';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';

import { AuthHttp } from './authhttp.service';

@Injectable()
export class PropertyService extends BaseService {
  constructor(protected http: AuthHttp, protected configService: ConfigService) {
    super(http, configService);
  }
  
  getProperties(): Observable<Property[]> {
    return this.http.get(this._baseUrl + 'property')
      .map((res: Response) => {
        console.log(res);
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

  remove(property: Property): Observable<Response> {
    return this.http.delete(this._baseUrl + 'property/' + property.id);
  }

  save(property: Property): Observable<Property> {
    if (property.id) {
      return this.put(property);
    }
    return this.post(property);
  }

  private post(property: Property): Observable<Property> {
    return this.http.post(this._baseUrl + 'property/', JSON.stringify(property))
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }

  private put(property: Property) {
    return this.http.put(this._baseUrl + 'property/', JSON.stringify(property))
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }
}
