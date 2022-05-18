import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTreeComponent } from './navbar-tree.component';

describe('NavbarTreeComponent', () => {
  let component: NavbarTreeComponent;
  let fixture: ComponentFixture<NavbarTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
