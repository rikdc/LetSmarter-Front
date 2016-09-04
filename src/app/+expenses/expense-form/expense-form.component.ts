import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

import { Expense, Property } from '../../+property/property';


export class Option {
    constructor(public value: string, public name: string) { }
}

//import {MaterializeDirective} from "../../../src/index";
//import * as Materialize from "../../../src/index";
//import {Option} from './option';

@Component({
    selector: "materialSelect",
    //directives: [MaterializeDirective],
    template: `
      <div class="row">
          <div class="input-field col s6">
                <select [ngModel]="initialValue" (ngModelChange)="change($event)" id="selectExample" materialize="material_select">
                  <option value="" disabled selected>Select option ..</option>
                  <option *ngFor="let option of options" [value]="option.value">{{option.name}}</option>
              </select>
          </div>
      </div>
`
})
export class MaterialSelect {
    @Input() initialValue: string;
    @Output() modelChange = new EventEmitter();
    @Input() options: Option[];

    change(newValue) {
     // Materialize.toast('child select: '+newValue, 2000)
      this.modelChange.emit(newValue);
    }
}

@Component({
  selector: 'app-expense-form',
  templateUrl: 'expense-form.component.html',
  directives: [FORM_DIRECTIVES, DatePicker, MaterialSelect],
})
export class ExpenseFormComponent implements OnInit {

  constructor() { }

  @Input() expense: Expense;
  @Input() properties: Property[];

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  ngOnInit() {
  }

  save() {
    this.onSave.emit(this.expense);
  }

  cancel() {
    this.onCancel.emit(this.expense);
  }
}
