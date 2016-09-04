import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer }         from 'rxjs';
import { Router }                       from '@angular/router';

import { ExpenseFormComponent }         from './expense-form';
import { ExpensesListItemComponent }    from './expenses-list-item';

import { Property }                     from './../+property/property';

import { Expense } from './expense';
import { AppData } from '../app.data';

import { PaginationService } from 'ng2-paginate';

@Component({
  selector: 'app-expenses-list',
  templateUrl: 'expenses-list.component.html',
  providers: [ ExpenseFormComponent, ExpensesListItemComponent, PaginationService ]
})
export class Expenses implements OnInit {

  private expenses: Expense[];
  private selectedExpense; Expense;
  public total: number;
  public page: number;

  private properties: Property[];
  private propertiesObservable: any;

  constructor(
    private router: Router,
    private dataService: AppData
  ) { }

  ngOnInit() {
    this.getPage(1);
    this.getProperties();
  };

  ngOnDestroy() {
    this.propertiesObservable.unsubscribe();
  }

  getProperties() {
    this.propertiesObservable = this.dataService.getProperties().subscribe(result => {
        this.properties = result;
    });
  }

  getPage(page: number) {
    this.page = page;
    this.dataService.getExpenses(page).subscribe(result => {
      //this.total = this.dataService.total;
      this.expenses = result;
    });
  }

  addNew() {
    this.selectedExpense = new Expense();
  }

  onCancel() {
    this.selectedExpense = null;
  }

  addExpense() {
    console.log('Saving expense', this.selectedExpense);
    this.dataService.save(this.selectedExpense)
      .subscribe(() => {
        this.selectedExpense = null;
        this.getPage(this.page);
      });
  }

  editExpense(expense) {
    this.selectedExpense = expense;
  }

  removeExpense(expense) {
    if (confirm("Are you sure you want to delete this expense?")) {
      this.dataService.remove(expense).subscribe(result => {
          this.expenses = this.expenses.filter((e) => e.id != expense.id);
      });
    }
  }

  onSelect(expense: Expense) {
    this.router.navigate(['/expenses', expense.id]);
  }
}