import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMoneyCalculationComponent } from './time-money-calculation.component';

describe('TimeMoneyCalculationComponent', () => {
  let component: TimeMoneyCalculationComponent;
  let fixture: ComponentFixture<TimeMoneyCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeMoneyCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeMoneyCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
