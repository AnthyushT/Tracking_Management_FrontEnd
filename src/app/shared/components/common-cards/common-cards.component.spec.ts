import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCardsComponent } from './common-cards.component';

describe('CommonCardsComponent', () => {
  let component: CommonCardsComponent;
  let fixture: ComponentFixture<CommonCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonCardsComponent]
    });
    fixture = TestBed.createComponent(CommonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
