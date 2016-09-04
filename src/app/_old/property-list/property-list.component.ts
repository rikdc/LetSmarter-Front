import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { PropertyService, Property, ConfigService } from '../shared/'

@Component({
  selector: 'app-property-list',
  templateUrl: 'property-list.component.html',
  styleUrls: ['property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: PropertyService
  ) { }

  private properties: Property[];
  private selectedProperty: Property;

  ngOnInit() {
    this.dataService.getProperties().subscribe(p => {
      this.properties = p;
    });
  };

  onSelect(property: Property) {
    this.router.navigate(['/property', property.id]);
  }

  addNew() {
    this.selectedProperty = new Property();
  }

  cancelAddNew() {
    this.selectedProperty = null;
  }

  saveProperty(property) {  
    this.dataService.save(this.selectedProperty)
      .subscribe(p => {
        this.properties.push(p);
      });
  }

  deleteProperty(property) {
    this.dataService.remove(property).subscribe(
            success => {
                            var index = this.properties.indexOf(property);
                            if (index > -1) {
                              this.properties.splice(index);
                            }
                        },
              error => console.log(error));

/*
        .subscribe();*/
  }
}