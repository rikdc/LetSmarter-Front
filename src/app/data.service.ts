import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/Http';
import { ConfigService } from './shared/config.service';

@Injectable()
export class DataService {

  private _baseUrl: string = ''
  private headers: Headers;

  constructor(private http: Http,
    private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

}
