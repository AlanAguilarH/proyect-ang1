import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplocss3Component } from './ejemplocss3.component';

describe('Ejemplocss3Component', () => {
  let component: Ejemplocss3Component;
  let fixture: ComponentFixture<Ejemplocss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplocss3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplocss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
