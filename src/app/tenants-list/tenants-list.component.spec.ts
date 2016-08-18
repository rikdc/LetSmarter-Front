/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TenantsListComponent } from './tenants-list.component';

describe('Component: TenantsList', () => {
  it('should create an instance', () => {
    let component = new TenantsListComponent();
    expect(component).toBeTruthy();
  });
});
