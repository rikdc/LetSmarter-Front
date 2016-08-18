import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { PropertyService, Property }        from '../shared/';
import { Subscription }                 from 'rxjs/Subscription';

import { PropertyTenantsListComponent } from '../property-tenants-list';

import { ScheduleComponent } from './schedule';

@Component({
  selector: 'app-property-detail',
  templateUrl: 'property-detail.component.html',
  styleUrls: ['property-detail.component.css'],
  providers: [ScheduleComponent]
})
export class PropertyDetailComponent implements OnInit {

  private sub: Subscription;
  private property: Property;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PropertyService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id'];
       this.service.getProperty(id).subscribe(property => this.property = property);
     });
  }

  goBack() {
    this.router.navigate(['/dashboard', { id: this.property.id }]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
