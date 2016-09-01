import { Component, OnInit, Input } from '@angular/core';

import { Property, Lease } from '../../property';

@Component({
  selector: 'app-lease-schedule',
  templateUrl: 'schedule.component.html'
})
export class PropertySchedule implements OnInit {

  constructor() { }

  @Input() lease: Lease;

  ngOnInit() {
  }

}
