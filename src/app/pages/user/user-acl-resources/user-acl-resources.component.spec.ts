import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAclResourcesComponent } from './user-acl-resources.component';

describe('UserAclResourcesComponent', () => {
  let component: UserAclResourcesComponent;
  let fixture: ComponentFixture<UserAclResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAclResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAclResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
