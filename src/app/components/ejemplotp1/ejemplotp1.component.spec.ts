import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplotp1Component } from './ejemplotp1.component';

describe('Ejemplotp1Component', () => {
  let component: Ejemplotp1Component;
  let fixture: ComponentFixture<Ejemplotp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplotp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplotp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
