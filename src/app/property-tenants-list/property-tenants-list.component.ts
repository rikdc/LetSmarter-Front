import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tenant } from '../shared';

@Component({
  selector: 'app-property-tenants-list',
  templateUrl: 'property-tenants-list.component.html',
  styleUrls: ['property-tenants-list.component.css']
})
export class PropertyTenantsListComponent implements OnInit {

  @Input() tenants: Tenant[];

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
