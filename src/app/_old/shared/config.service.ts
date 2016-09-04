import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor() {
        this._apiURI = 'http://localhost:8232/api/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/', '');
     }
}

export class Auth0Vars {
    static AUTH0_CLIENT_ID = 'O1Cz1GxtjBY5TZjBnKS6KCIVmWKOdZnI';
    static AUTH0_DOMAIN = 'letsmarter.auth0.com';
    static AUTH0_CALLBACK_URL = location.href;
}