import { Component, OnInit, Input } from '@angular/core';

import { Property, Lease } from '../../shared';

@Component({
  selector: 'app-lease-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  @Input() lease: Lease;

  ngOnInit() {
  }

}
