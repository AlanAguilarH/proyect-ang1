import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplocss1Component } from './ejemplocss1.component';

describe('Ejemplocss1Component', () => {
  let component: Ejemplocss1Component;
  let fixture: ComponentFixture<Ejemplocss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplocss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplocss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
