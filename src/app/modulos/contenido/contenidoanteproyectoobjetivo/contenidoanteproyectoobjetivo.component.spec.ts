import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectoobjetivoComponent } from './contenidoanteproyectoobjetivo.component';

describe('ContenidoanteproyectoobjetivoComponent', () => {
  let component: ContenidoanteproyectoobjetivoComponent;
  let fixture: ComponentFixture<ContenidoanteproyectoobjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectoobjetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectoobjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
