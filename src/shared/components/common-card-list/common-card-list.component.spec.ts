import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCardListComponent } from './common-card-list.component';

describe('CommonCardListComponent', () => {
  let component: CommonCardListComponent;
  let fixture: ComponentFixture<CommonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
