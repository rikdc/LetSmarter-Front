/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('Service: Config', () => {
  beforeEach(() => {
    addProviders([ConfigService]);
  });

  it('should ...',
    inject([ConfigService],
      (service: ConfigService) => {
        expect(service).toBeTruthy();
      }));
});
