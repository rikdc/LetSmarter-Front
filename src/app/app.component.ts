import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from './auth/auth.service';
import {MaterializeDirective} from "angular2-materialize";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [MaterializeDirective],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Ls ;)';
  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  get authenticated() {
    return this.auth.authenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
