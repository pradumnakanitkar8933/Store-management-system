import { TestBed } from '@angular/core/testing';

import { SellerguardService } from './sellerguard.service';

describe('SellerguardService', () => {
  let service: SellerguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
