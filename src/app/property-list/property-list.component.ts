import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { DataService, Property, ConfigService } from '../shared/'

@Component({
  selector: 'app-property-list',
  templateUrl: 'property-list.component.html',
  styleUrls: ['property-list.component.css'],
  providers: [DataService, ConfigService],
})
export class PropertyListComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  private properties: Property[];
  private selectedProperty; Property;

  ngOnInit() {
    this.dataService.getProperties().subscribe(p => {
      this.properties = p;
    });
  };

  onSelect(property: Property) {
    this.router.navigate(['/property', property.id]);
  }
}