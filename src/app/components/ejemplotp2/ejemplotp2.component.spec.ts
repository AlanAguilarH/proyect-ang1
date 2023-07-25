import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplotp2Component } from './ejemplotp2.component';

describe('Ejemplotp2Component', () => {
  let component: Ejemplotp2Component;
  let fixture: ComponentFixture<Ejemplotp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplotp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplotp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
