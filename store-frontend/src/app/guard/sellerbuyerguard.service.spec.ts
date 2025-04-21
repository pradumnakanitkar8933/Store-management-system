import { TestBed } from '@angular/core/testing';

import { SellerbuyerguardService } from './sellerbuyerguard.service';

describe('SellerbuyerguardService', () => {
  let service: SellerbuyerguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerbuyerguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
