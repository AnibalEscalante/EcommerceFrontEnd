import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketScreenComponent } from './basket-screen.component';

describe('BasketScreenComponent', () => {
  let component: BasketScreenComponent;
  let fixture: ComponentFixture<BasketScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
