import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploproyfrontendComponent } from './ejemploproyfrontend.component';

describe('EjemploproyfrontendComponent', () => {
  let component: EjemploproyfrontendComponent;
  let fixture: ComponentFixture<EjemploproyfrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploproyfrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploproyfrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
