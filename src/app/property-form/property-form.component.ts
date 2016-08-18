import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService, Property, ConfigService } from '../shared/'

@Component({
  selector: 'app-property-form',
  templateUrl: 'property-form.component.html',
  styleUrls: ['property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  @Input() property: Property;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.dataService.getProperty(id)
          .subscribe(property => this.property = property);
      } else {
        this.property = new Property();
      }
    });
  }

}
