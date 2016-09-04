/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ExpenseDetailsComponent } from './expense-details.component';

describe('Component: ExpenseDetails', () => {
  it('should create an instance', () => {
    let component = new ExpenseDetailsComponent();
    expect(component).toBeTruthy();
  });
});
