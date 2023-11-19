import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarehousesComponent } from './list-warehouses.component';

describe('ListWarehousesComponent', () => {
  let component: ListWarehousesComponent;
  let fixture: ComponentFixture<ListWarehousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWarehousesComponent]
    });
    fixture = TestBed.createComponent(ListWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
