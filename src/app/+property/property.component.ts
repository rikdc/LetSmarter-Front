import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { Property } from './property'
import { AppData } from '../app.data';

@Component({
  selector: 'app-property',
  templateUrl: 'property.component.html'
})
export class PropertyList implements OnInit {

  constructor(
    private router: Router,
    private dataService: AppData
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