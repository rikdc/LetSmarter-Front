/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {ExpensesDataservice} from './expenses-dataservice';

describe('ExpensesDataservice', () => {
  it('should create an instance', () => {
    expect(new ExpensesDataservice()).toBeTruthy();
  });
});
