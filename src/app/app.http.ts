import { Injectable }    from '@angular/core';
import { Headers, Request, Response, Http, RequestOptions, XHRBackend, ResponseOptions, XSRFStrategy, BrowserXhr } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

export class AuthenticationConnectionBackend extends XHRBackend {

    constructor(_browserXhr: BrowserXhr, _baseResponseOptions: ResponseOptions, _xsrfStrategy: XSRFStrategy) {
        super(_browserXhr, _baseResponseOptions, _xsrfStrategy);
    }

    createConnection(request: Request) {
        let xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection.response.catch((error: Response) => {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expires or the user is not authorized. Force refresh of the current page.');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable.throw(error);
        });
        return xhrConnection;
    }

}

@Injectable()
export class AppHttp {
    constructor(protected http: Http) {
    }

    getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_key'));

        return headers;
    }

    get(url): Observable<Response> {
        let options = new RequestOptions({ headers: this.getHeaders(), body: {} });
        return this.http.get(url, options);
    }

    post(url, data): Observable<Response>  {
        let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.post(url, data, options);
    }

    put(url, data): Observable<Response>  {
        let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.put(url, data, options);
    }

    delete(url): Observable<Response>  {
        let options = new RequestOptions({ headers: this.getHeaders(), body: {} });
        return this.http.delete(url, options);
    }
}
