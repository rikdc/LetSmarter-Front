import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    _apiURI : string;

    constructor() {
        this._apiURI = 'http://localhost:29035/api/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/','');
     }
}
