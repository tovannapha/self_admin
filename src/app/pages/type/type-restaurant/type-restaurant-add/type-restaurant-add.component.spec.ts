import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRestaurantAddComponent } from './type-restaurant-add.component';

describe('TypeRestaurantAddComponent', () => {
  let component: TypeRestaurantAddComponent;
  let fixture: ComponentFixture<TypeRestaurantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeRestaurantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRestaurantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
