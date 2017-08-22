import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHomeComponent } from './notification-home.component';

describe('NotificationHomeComponent', () => {
  let component: NotificationHomeComponent;
  let fixture: ComponentFixture<NotificationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
