import { TestBed } from '@angular/core/testing';

import { BuyerguardService } from './buyerguard.service';

describe('BuyerguardService', () => {
  let service: BuyerguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
