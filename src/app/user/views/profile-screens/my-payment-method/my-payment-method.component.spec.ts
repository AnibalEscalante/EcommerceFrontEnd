import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentMethodComponent } from './my-payment-method.component';

describe('MyPaymentMethodComponent', () => {
  let component: MyPaymentMethodComponent;
  let fixture: ComponentFixture<MyPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
