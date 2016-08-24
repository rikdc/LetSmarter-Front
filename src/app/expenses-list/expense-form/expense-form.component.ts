import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import {DatePicker} from 'ng2-datepicker/ng2-datepicker';

import { Expense, Property } from '../../shared/';

@Component({
  selector: 'app-expense-form',
  templateUrl: 'expense-form.component.html',
  styleUrls: ['expense-form.component.scss'],
  directives: [ FORM_DIRECTIVES, DatePicker],
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
