import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShoppingsComponent } from './my-shoppings.component';

describe('MyShoppingsComponent', () => {
  let component: MyShoppingsComponent;
  let fixture: ComponentFixture<MyShoppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyShoppingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShoppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
