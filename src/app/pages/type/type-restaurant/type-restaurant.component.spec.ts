import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRestaurantComponent } from './type-restaurant.component';

describe('TypeRestaurantComponent', () => {
  let component: TypeRestaurantComponent;
  let fixture: ComponentFixture<TypeRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
