import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralListsComponent } from './general-lists.component';

describe('GeneralListsComponent', () => {
  let component: GeneralListsComponent;
  let fixture: ComponentFixture<GeneralListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
