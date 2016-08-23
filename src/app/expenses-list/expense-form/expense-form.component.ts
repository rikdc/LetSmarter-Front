import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Expense } from '../../shared/';

@Component({
  selector: 'app-expense-form',
  templateUrl: 'expense-form.component.html',
  styleUrls: ['expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  constructor() { }

  @Input() expense: Expense;

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
