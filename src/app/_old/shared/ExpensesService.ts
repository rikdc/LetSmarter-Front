import { Injectable }    from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from './authhttp.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Property, Expense, PropertyService } from '../shared';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';

@Injectable()
/// <reference path="data.service.ts" />
export class ExpensesService extends BaseService {
  constructor(protected http: AuthHttp, protected configService: ConfigService) {
    super(http, configService);
  }

  public total: number;
  getExpenses(page: number): Observable<Expense[]> {
    return this.http.get(this._baseUrl + 'expenses?pageIndex=' + page)
      .do((res: any) => {
        this.total = res.json().total
      })
      .map((res: Response) => {
        return res.json().results;
      })
      .catch(this.handleObservableError);
  };


  save(expense: Expense): Observable<Expense> {
    if (expense.id) {
      return this.put(expense);
    }
    return this.post(expense);
  }

  remove(expense: Expense): Observable<Response> {
    return this.http.delete(this._baseUrl + 'expenses/' + expense.id);
  }

  private post(expense: Expense): Observable<Expense> {
    return this.http.post(this._baseUrl + 'expenses/', JSON.stringify(expense))
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleObservableError);
  }

  private put(expense: Expense) {
    return this.http.put(this._baseUrl + 'expenses/', JSON.stringify(expense))
      .catch(this.handleObservableError);
  }
}
