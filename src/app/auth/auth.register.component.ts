import { Component, OnInit} from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

import { User } from './user';
import { Auth } from './auth.service';

@Component({
    selector: 'register',
    providers: [Auth],
    templateUrl: 'auth.register.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent implements OnInit {

    private _newUser: User;

    constructor(
        private _authService: Auth,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this._newUser = new User('', '', '', '');
    }

    register(): void {
        var _result = { Succeeded: false };
        this._authService.register(this._newUser)
            .subscribe(res => {
                _result = res;
            },
            error => console.error('Error: ' + error),
            () => {
                if (_result.Succeeded) {
                    alert('Excellent!');
                }
                else {
                    alert('Something is wrong, please check your inputs');
                }
            });
    };
}