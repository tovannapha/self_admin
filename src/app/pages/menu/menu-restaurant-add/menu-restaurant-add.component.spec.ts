import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRestaurantAddComponent } from './menu-restaurant-add.component';

describe('MenuRestaurantAddComponent', () => {
  let component: MenuRestaurantAddComponent;
  let fixture: ComponentFixture<MenuRestaurantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRestaurantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRestaurantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
