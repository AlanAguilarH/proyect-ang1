import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplocss4Component } from './ejemplocss4.component';

describe('Ejemplocss4Component', () => {
  let component: Ejemplocss4Component;
  let fixture: ComponentFixture<Ejemplocss4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplocss4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplocss4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
