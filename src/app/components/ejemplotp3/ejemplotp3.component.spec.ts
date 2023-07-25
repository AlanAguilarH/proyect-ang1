import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplotp3Component } from './ejemplotp3.component';

describe('Ejemplotp3Component', () => {
  let component: Ejemplotp3Component;
  let fixture: ComponentFixture<Ejemplotp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplotp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplotp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
