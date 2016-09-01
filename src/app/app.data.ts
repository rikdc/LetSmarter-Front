import { Injectable }    from '@angular/core';
import { AppHttp } from './app.http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AppData {
    protected _baseUrl = '';  // URL to web api

    constructor(protected http: AppHttp) {
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
