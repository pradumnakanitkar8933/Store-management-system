import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerheaderComponent } from './sellerheader.component';

describe('SellerheaderComponent', () => {
  let component: SellerheaderComponent;
  let fixture: ComponentFixture<SellerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
