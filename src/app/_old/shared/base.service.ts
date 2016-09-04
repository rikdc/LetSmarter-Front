import { Injectable }    from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from './authhttp.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ConfigService } from './config.service';

@Injectable()
export class BaseService {
    protected _baseUrl = 'app/';  // URL to web api

    constructor(protected http: AuthHttp, protected configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    protected handleObservableError(error: any) {
        console.log('Error in BaseService', error);

        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

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