import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplotp4Component } from './ejemplotp4.component';

describe('Ejemplotp4Component', () => {
  let component: Ejemplotp4Component;
  let fixture: ComponentFixture<Ejemplotp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplotp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplotp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
