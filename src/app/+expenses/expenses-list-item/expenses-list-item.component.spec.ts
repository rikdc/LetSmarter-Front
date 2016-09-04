/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ExpensesListItemComponent } from './expenses-list-item.component';

describe('Component: ExpensesListItem', () => {
  it('should create an instance', () => {
    let component = new ExpensesListItemComponent();
    expect(component).toBeTruthy();
  });
});
