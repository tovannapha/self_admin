import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAclComponent } from './user-acl.component';

describe('UserAclComponent', () => {
  let component: UserAclComponent;
  let fixture: ComponentFixture<UserAclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
