import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoScreenComponent } from './product-info-screen.component';

describe('ProductInfoScreenComponent', () => {
  let component: ProductInfoScreenComponent;
  let fixture: ComponentFixture<ProductInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
