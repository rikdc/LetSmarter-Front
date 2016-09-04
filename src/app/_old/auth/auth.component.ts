import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Router } from "@angular/router";

import {JwtHelper, tokenNotExpired} from 'angular2-jwt'
import {Observable} from 'rxjs/Rx';

import { Auth, LogModel } from './auth.service';

export class RegisterModel {
    public Email: string;
    public Password: string;
    public ConfirmPassword: string;
}



export class Regresult {
    public succeeded: string;
    public errors: any[];
}

@Component({
    selector: 'app-auth',
    directives: [FORM_DIRECTIVES],
    template: `
    <h4>Login</h4>
<form id="login-form" name="Loginform">
            <div class="modal-body">
                <div id="div-login-msg">
                    <div id="text-login-msg">
                        <span class="red-text text-darken-2">
                         {{logMsg}}
                        </span>
                    </div>
                </div>
                <input name="nusername" [(ngModel)]="model.username" class="form-control" type="text" placeholder="Username (type ERROR for error effect)"
                    required>
                <input name="npassword" style="margin-top:10px" [(ngModel)]="model.password" class="form-control" type="password" placeholder="Password" required>
            </div>
            <div class="modal-footer">
                <div style="text-align:center">
                    <button type="submit" (click)="login(model)" class="btn btn-primary btn-lg btn-block">Login</button>
                </div>
                <div>
                    {{externals}}
                </div>
            </div>
</form>
    `
})
export class AuthComponent {
    constructor(
        protected auth: Auth,
        private router: Router
    ) {

    }

    public model = new LogModel();
    
    login() {
        this.auth.login(this.model).subscribe(
            TokenResult => {
                localStorage.setItem("auth_key", TokenResult.access_token);
                localStorage.setItem("refresh_key", TokenResult.refresh_token);

                this.router.navigate(['/dashboard']);
            },
            Error => {
                var error, key;
                key = Error.json();
                for (error in key) {
                    console.log(key[error]);
                }
            }
        );
    }
}