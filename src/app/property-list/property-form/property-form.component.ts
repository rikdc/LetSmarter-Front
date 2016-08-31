import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Property, ConfigService } from '../../shared/';

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
  }

  save() {
    this.onSave.emit(this.property);
  }

  cancel() {
    this.onCancel.emit(this.property);
  }
}
