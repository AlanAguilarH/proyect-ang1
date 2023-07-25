import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplocss2Component } from './ejemplocss2.component';

describe('Ejemplocss2Component', () => {
  let component: Ejemplocss2Component;
  let fixture: ComponentFixture<Ejemplocss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplocss2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplocss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
