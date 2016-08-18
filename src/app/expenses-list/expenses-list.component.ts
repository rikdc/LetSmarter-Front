import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { ExpensesService, Expense, ConfigService } from '../shared/'

@Component({
  selector: 'app-expenses-list',
  templateUrl: 'expenses-list.component.html',
  styleUrls: ['expenses-list.component.css'],
  providers: [ExpensesService, ConfigService],
})
export class ExpensesListComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: ExpensesService
  ) { }

  private expenses: Expense[];
  private selectedExpense; Expense;

  ngOnInit() {
    this.dataService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    });
  };

  onSelect(expense: Expense) {
    this.router.navigate(['/expenses', expense.id]);
  }
}