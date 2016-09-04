/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    
    <header>
      <nav class="top-nav blue darken-3"></nav>
        <ul class="side-nav fixed grey lighten-3">
              <li>
                <a [routerLink]=" ['./'] ">
                  Index
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./home'] ">
                  Home
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./property'] ">
                  Properties
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./expenses'] ">
                  Expenses
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./detail'] ">
                  Detail
                </a>
              </li>
              <li>
                <a [routerLink]=" ['./about'] ">
                  About
                </a>
              </li>
              </ul>

    </header>

      <main>
        <div class="row">
          <div class="col s3">
            <!-- Grey navigation panel -->
          </div>

          <div class="col s9">
            <div class="content"><router-outlet></router-outlet></div>
          </div>
        </div>
      </main>
      <footer class="page-footer">
      </footer>


    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
export class App {
  name = 'Let Smarter';
  url = 'https://github.com/rikdc';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
