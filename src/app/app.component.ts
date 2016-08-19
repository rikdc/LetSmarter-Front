import { Component, ViewEncapsulation } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [MaterializeDirective],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
