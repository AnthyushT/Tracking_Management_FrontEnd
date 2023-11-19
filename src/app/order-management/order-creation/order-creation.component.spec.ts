import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreationComponent } from './order-creation.component';

describe('OrderCreationComponent', () => {
  let component: OrderCreationComponent;
  let fixture: ComponentFixture<OrderCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCreationComponent]
    });
    fixture = TestBed.createComponent(OrderCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
