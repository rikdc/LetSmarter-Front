import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { DataService, Property }        from '../shared/';
import { Subscription }                 from 'rxjs/Subscription';

import { PropertyTenantsListComponent } from '../property-tenants-list';

@Component({
  selector: 'app-property-detail',
  templateUrl: 'property-detail.component.html',
  styleUrls: ['property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  private sub: Subscription;
  private property: Property;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService) {}

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
