/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ExpensesListComponent } from './expenses-list.component';

describe('Component: ExpensesList', () => {
  it('should create an instance', () => {
    let component = new ExpensesListComponent();
    expect(component).toBeTruthy();
  });
});
