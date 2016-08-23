import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { ExpenseFormComponent }     from './expense-form';

import { ExpensesService, PropertyService, Property, Expense, ConfigService } from '../shared/'
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-expenses-list',
  templateUrl: 'expenses-list.component.html',
  styleUrls: ['expenses-list.component.css'],
  providers: [ExpensesService, PropertyService, ConfigService, ExpenseFormComponent],
  directives: [MaterializeDirective]
})
export class ExpensesListComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: ExpensesService,
    private propertyService: PropertyService
  ) { }

  private expenses: Observable<Expense[]>;
  private selectedExpense; Expense;
  public total: number;
  public page: number;

  private properties: Property[];
  private propertiesObservable: any;

  ngOnInit() {
    this.getPage(1);
    this.getProperties();
  };

  ngOnDestroy() {
    this.propertiesObservable.unsubscribe();
  }

  getProperties() {
    this.propertiesObservable = this.propertyService.getProperties().subscribe(result => {
        this.properties = result;
    });
  }

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

  editExpense(expense) {
    console.log(expense);
    this.selectedExpense = expense;
  }

  removeExpense(expense) {
    if (confirm("Are you sure you want to delete this expense?")) {
      this.dataService.remove(expense).subscribe(result => {
          
      });
    }
  }

  onSelect(expense: Expense) {
    this.router.navigate(['/expenses', expense.id]);
  }
}