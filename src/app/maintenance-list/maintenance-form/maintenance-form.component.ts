import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Maintenance, Property } from '../../shared/';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: 'maintenance-form.component.html',
  styleUrls: ['maintenance-form.component.scss']
})
export class MaintenanceFormComponent implements OnInit {

  @Input() maintenance: Maintenance;

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.onSave.emit(this.maintenance);
  }

  cancel() {
    this.onCancel.emit(this.maintenance);
  }

}
