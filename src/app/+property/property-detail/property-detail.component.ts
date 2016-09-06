import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Property } from '../../app.models';
import { Subscription } from 'rxjs/Subscription';

import { PropertyForm } from '../property-form/';
import { LeasesComponent } from './leases/leases.component';
import { PropertySchedule } from './schedule/schedule.component';

import { AppData } from './../../app.data';
import { AppState } from './../../app.service';

declare var $: any;

// <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>

@Component({
  selector: 'app-property-detail',
  templateUrl: 'property-detail.component.html'
})
export class PropertyDetail implements OnInit {
  private property: Property;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    public appState: AppState,
    private dataService: AppData,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.dataService.getProperty(id).subscribe(
        property => this.property = property
      );
    });

    $('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }

  goBack() {
    this.router.navigate(['/dashboard', { id: this.property.id }]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
