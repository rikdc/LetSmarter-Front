import {Injectable, NgZone} from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import {Auth0Vars} from '../shared/config.service';


export class LogModel {
    public username: string;
    public password: string;
}

export class TokenResult {
    public access_token: string;
    public expires_in: string;
    public refresh_token: string;
    public token_type: string;
}

@Injectable()
export class Auth {

    refreshSubscription: any;
    user: Object;
    zoneImpl: NgZone;

    constructor(private http: Http, zone: NgZone) {
        this.zoneImpl = zone;
        this.user = JSON.parse(localStorage.getItem('profile'));
    }

    public authenticated() {
        // TODO: Actually implement something here.
        const token: string = localStorage.getItem("auth_key");

        return token != null;
    }

    private headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
    private options = new RequestOptions({ headers: this.headers });
    private tokenParams = "grant_type=password";

    public model = new LogModel();

    login(inputType: LogModel): Observable<TokenResult> {
        console.log('Attempting login...');
        return this.http.post("http://localhost:8232/connect/token",
            this.tokenParams + "&username=" + inputType.username + "&password=" + inputType.password, this.options)
            .map(res => <TokenResult>res.json())
            .catch(this.handleError)
    }

    public logout() {
        localStorage.removeItem('auth_key');
        localStorage.removeItem('refresh_key');
    }

    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }
}