import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { AppData } from './../../../app.data';
import { Lease, Property } from '../../../app.models';

@Component({
  selector: 'app-leases',
  templateUrl: 'leases.component.html'
})
export class LeasesComponent {

  private _property: Property;
  public leases: Lease[];
  public total: number;
  public page: number;

  constructor(
    private dataService: AppData
  ) { }

  @Input()
  set property(property: Property) {
    this._property = property;
    if (!property) {
      return;
    }

    this.dataService.getLeasesForProperty(property.id, 1)
      .subscribe(l => {
        this.total = 10;//this.dataService.total;
        this.leases = l;
      });
  }

  get property() {
    return this._property;
  }
}
