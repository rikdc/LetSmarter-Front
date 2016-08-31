import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { Lease, Property, LeaseService } from '../../shared';

@Component({
  selector: 'app-leases',
  templateUrl: 'leases.component.html',
  styleUrls: ['leases.component.scss']
})
export class LeasesComponent implements OnInit {

  constructor(private leaseService: LeaseService) { }

  private _property: Property;
  public leases: Lease[];
  public total: number;
  public page: number;

  @Input()
  set property(property: Property) {
    this._property = property;

    this.leaseService.getLeasesForProperty(property.id, 1)
      .subscribe(l => {
        this.total = this.leaseService.total;
        this.leases = l;
      });

  }
  get property() {
    return this._property;
  }

  ngOnInit() {

  }

}
