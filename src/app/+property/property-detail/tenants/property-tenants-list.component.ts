import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tenant } from '../../../app.models';

@Component({
  selector: 'app-property-tenants-list',
  templateUrl: 'property-tenants-list.component.html'
})
export class PropertyTenantsListComponent implements OnInit {

  @Input() tenants: Tenant[];

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
