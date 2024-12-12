import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBillComponent } from './quick-bill.component';

describe('QuickBillComponent', () => {
  let component: QuickBillComponent;
  let fixture: ComponentFixture<QuickBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
