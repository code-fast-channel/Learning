import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeTestComponent } from './quize-test.component';

describe('QuizeTestComponent', () => {
  let component: QuizeTestComponent;
  let fixture: ComponentFixture<QuizeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
