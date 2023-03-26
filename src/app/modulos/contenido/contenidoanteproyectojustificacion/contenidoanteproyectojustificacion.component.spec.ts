import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectojustificacionComponent } from './contenidoanteproyectojustificacion.component';

describe('ContenidoanteproyectojustificacionComponent', () => {
  let component: ContenidoanteproyectojustificacionComponent;
  let fixture: ComponentFixture<ContenidoanteproyectojustificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectojustificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectojustificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
