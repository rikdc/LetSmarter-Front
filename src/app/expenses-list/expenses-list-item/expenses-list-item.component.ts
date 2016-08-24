import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../shared/';
import { MaterializeDirective } from "angular2-materialize";


@Component({
  selector: 'app-expenses-list-item',
  templateUrl: 'expenses-list-item.component.html',
  styleUrls: ['expenses-list-item.component.scss']
})
export class ExpensesListItemComponent implements OnInit {

  @Input() expense: Expense;

  constructor() { }

  ngOnInit() {
  }

}
