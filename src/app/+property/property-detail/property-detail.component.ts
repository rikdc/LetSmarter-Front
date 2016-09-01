import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Property }                     from '../property';
import { Subscription }                 from 'rxjs/Subscription';

import { PropertyForm }                 from '../property-form/';
import { LeasesComponent }              from './leases/leases.component';
import { PropertySchedule }             from './schedule/schedule.component';

@Component({
  selector: 'app-property-detail',
  templateUrl: 'property-detail.component.html'
})
export class PropertyDetail implements OnInit {
  private property: Property;
  /*
    private sub: Subscription;

  
    constructor(
      private route: ActivatedRoute,
      private router: Router) {}
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         let id = +params['id'];
         //this.service.getProperty(id).subscribe(property => this.property = property);
       });
    }
  
    goBack() {
      this.router.navigate(['/dashboard', { id: this.property.id }]);
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }*/
  ngOnInit() {
  }
}
