import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductVideogameComponent } from './add-edit-product-videogame.component';

describe('AddEditProductVideogameComponent', () => {
  let component: AddEditProductVideogameComponent;
  let fixture: ComponentFixture<AddEditProductVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductVideogameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProductVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
