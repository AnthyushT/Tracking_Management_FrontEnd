import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInventoryComponent } from './transfer-inventory.component';

describe('TransferInventoryComponent', () => {
  let component: TransferInventoryComponent;
  let fixture: ComponentFixture<TransferInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferInventoryComponent]
    });
    fixture = TestBed.createComponent(TransferInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
