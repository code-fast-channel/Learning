import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningListsComponent } from './learning-lists.component';

describe('LearningListsComponent', () => {
  let component: LearningListsComponent;
  let fixture: ComponentFixture<LearningListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
