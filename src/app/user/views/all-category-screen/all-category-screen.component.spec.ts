import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryScreenComponent } from './all-category-screen.component';

describe('AllCategoryScreenComponent', () => {
  let component: AllCategoryScreenComponent;
  let fixture: ComponentFixture<AllCategoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCategoryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
