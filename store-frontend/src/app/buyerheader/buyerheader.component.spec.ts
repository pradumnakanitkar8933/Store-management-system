import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerheaderComponent } from './buyerheader.component';

describe('BuyerheaderComponent', () => {
  let component: BuyerheaderComponent;
  let fixture: ComponentFixture<BuyerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyerheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
