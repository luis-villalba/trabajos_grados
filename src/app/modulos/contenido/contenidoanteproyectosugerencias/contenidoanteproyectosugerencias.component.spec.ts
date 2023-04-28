import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectosugerenciasComponent } from './contenidoanteproyectosugerencias.component';

describe('ContenidoanteproyectosugerenciasComponent', () => {
  let component: ContenidoanteproyectosugerenciasComponent;
  let fixture: ComponentFixture<ContenidoanteproyectosugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectosugerenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectosugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
