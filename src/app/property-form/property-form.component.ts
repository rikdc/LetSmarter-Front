import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Property, ConfigService } from '../shared/'

@Component({
  selector: 'app-property-form',
  templateUrl: 'property-form.component.html',
  styleUrls: ['property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  @Input() property: Property;

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  ngOnInit() {
    /*this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.dataService.getProperty(id)
          .subscribe(property => this.property = property);
      } else {
        this.property = new Property();
      }
    });*/
  }

  save() {
    this.onSave.emit(this.property);
  }

  cancel() {
    this.onCancel.emit(this.property);
  }
}
