import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Property, Maintenance } from '../shared';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';
import { AuthHttp } from './authhttp.service';

@Injectable()
/// <reference path="data.service.ts" />
export class MaintenanceService  extends BaseService {
  constructor(protected http: AuthHttp, protected configService: ConfigService) {
    super(http, configService);
  }

  getMaintenance(): Observable<Maintenance[]> {
    return this.http.get(this._baseUrl + 'maintenance')
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }
}
