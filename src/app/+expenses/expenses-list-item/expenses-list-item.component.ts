import { Component, Input } from '@angular/core';
import { Expense } from '../../+property/property';

@Component({
  selector: 'app-expenses-list-item',
  templateUrl: 'expenses-list-item.component.html',
})
export class ExpensesListItemComponent {

  @Input() expense: Expense;

  constructor() { }
}
