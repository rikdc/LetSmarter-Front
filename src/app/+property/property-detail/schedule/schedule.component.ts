import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'ng2-paginate';

import { Lease, Property } from '../../../app.models';

@Component({
  selector: 'app-lease-schedule',
  templateUrl: 'schedule.component.html',
  providers: [ PaginationService ]
})
export class PropertySchedule implements OnInit {

  constructor() { }

  @Input() lease: Lease;

  ngOnInit() {
  }

}
