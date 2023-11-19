import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWarehouseComponent } from './buy-warehouse.component';

describe('BuyWarehouseComponent', () => {
  let component: BuyWarehouseComponent;
  let fixture: ComponentFixture<BuyWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyWarehouseComponent]
    });
    fixture = TestBed.createComponent(BuyWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
