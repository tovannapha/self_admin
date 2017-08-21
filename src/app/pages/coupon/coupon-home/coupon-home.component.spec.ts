import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponHomeComponent } from './coupon-home.component';

describe('CouponHomeComponent', () => {
  let component: CouponHomeComponent;
  let fixture: ComponentFixture<CouponHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
