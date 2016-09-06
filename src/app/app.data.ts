import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AppHttp } from './app.http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Property, Lease, Expense, Maintenance } from './app.models';

@Injectable()
export class AppData {
    protected _baseUrl = 'http://localhost:8232/api/';  // URL to web api

    constructor(protected http: AppHttp) {
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

    getLeasesForProperty(propertyId: number, page: number): Observable<Lease[]> {
        return this.http.get(this._baseUrl + 'property/' + propertyId + '/leases/?pageIndex=' + page + "&pageSize=15")
            .do((res: any) => {
                //this.total = res.json().total
            })
            .map((res: Response) => {
                return res.json().results;
            })
            .catch(this.handleObservableError);
    };

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

    saveExpense(expense: Expense): Observable<Expense> {
        if (expense.id) {
            return this.put(expense, 'expenses');
        }
        return this.post(expense, 'expenses');
    }

    removeExpense(expense: Expense): Observable<Response> {
        return this.delete(expense.id, 'expenses');
    }

    getMaintenance(): Observable<Maintenance[]> {
        return this.http.get(this._baseUrl + 'maintenance')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleObservableError);
    }

    private delete(primaryKey: number, path: string) {
        return this.http.delete(this._baseUrl + path + '/' + primaryKey);
    }

    private post(model: any, path: string): Observable<Expense> {
        return this.http.post(this._baseUrl + path + '/', JSON.stringify(model))
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleObservableError);
    }

    private put(model: any, path: string) {
        return this.http.put(this._baseUrl + path + '/', JSON.stringify(model))
            .catch(this.handleObservableError);
    }

    protected handleObservableError(error: any) {
        let applicationError = error.headers.get('Application-Error');
        let serverError = error.json();
        let modelStateErrors = '';

        if (!serverError.type) {
            for (let key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}
