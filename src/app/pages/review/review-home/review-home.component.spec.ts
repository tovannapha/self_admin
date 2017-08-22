import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeComponent } from './review-home.component';

describe('ReviewHomeComponent', () => {
  let component: ReviewHomeComponent;
  let fixture: ComponentFixture<ReviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
