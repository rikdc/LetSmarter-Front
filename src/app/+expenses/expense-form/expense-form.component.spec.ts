/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ExpenseFormComponent } from './expense-form.component';

describe('Component: ExpenseForm', () => {
  it('should create an instance', () => {
    let component = new ExpenseFormComponent();
    expect(component).toBeTruthy();
  });
});
