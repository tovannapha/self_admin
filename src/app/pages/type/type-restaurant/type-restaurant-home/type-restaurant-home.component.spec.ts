import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRestaurantHomeComponent } from './type-restaurant-home.component';

describe('TypeRestaurantHomeComponent', () => {
  let component: TypeRestaurantHomeComponent;
  let fixture: ComponentFixture<TypeRestaurantHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeRestaurantHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRestaurantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
