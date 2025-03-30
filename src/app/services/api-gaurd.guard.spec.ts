import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { apiGaurdGuard } from './api-gaurd.guard';

describe('apiGaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => apiGaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
