import { Injectable }    from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from './authhttp.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Lease } from '../shared';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';

@Injectable()
/// <reference path="data.service.ts" />
export class LeaseService extends BaseService {
  constructor(protected http: AuthHttp, protected configService: ConfigService) {
    super(http, configService);
  }

  public total: number;

  getLeasesForProperty(propertyId: number, page: number): Observable<Lease[]> {
    return this.http.get(this._baseUrl + 'property/' + propertyId + '/leases/?pageIndex=' + page + "&pageSize=15")
      .do((res: any) => {
        this.total = res.json().total
      })
      .map((res: Response) => {
        return res.json().results;
      })
      .catch(this.handleObservableError);
  };

}
