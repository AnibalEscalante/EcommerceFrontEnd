import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcFiltersComponent } from './oc-filters.component';

describe('OcFiltersComponent', () => {
  let component: OcFiltersComponent;
  let fixture: ComponentFixture<OcFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
