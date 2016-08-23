import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { ExpenseFormComponent }     from './expense-form';

import { ExpensesService, Expense, ConfigService } from '../shared/'
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-expenses-list',
  templateUrl: 'expenses-list.component.html',
  styleUrls: ['expenses-list.component.css'],
  providers: [ExpensesService, ConfigService, ExpenseFormComponent],
  directives: [MaterializeDirective]
})
export class ExpensesListComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: ExpensesService
  ) { }

  private expenses: Observable<Expense[]>;
  private selectedExpense; Expense;
  public total: number;
  public page: number;


  ngOnInit() {
    this.getPage(1)
  };

  getPage(page: number) {
    this.page = page;
    this.expenses = this.dataService.getExpenses(page);

    this.expenses.subscribe(result => {
      this.total = this.dataService.total;
    });
  }

  addNew() {
    this.selectedExpense = new Expense();
  }

  onCancel() {
    this.selectedExpense = null;
  }

  addExpense() {
    console.log('Saving expense');
    this.dataService.save(this.selectedExpense)
      .subscribe(() => {
        this.selectedExpense = null;
        this.getPage(this.page);
      });
  }

  onSelect(expense: Expense) {
    this.router.navigate(['/expenses', expense.id]);
  }
}