import { TestBed } from '@angular/core/testing';

import { DashboardProductsStateService } from './dashboard-products-state.service';

describe('DashboardProductsStateService', () => {
  let service: DashboardProductsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardProductsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
