import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectodescripcionComponent } from './contenidoanteproyectodescripcion.component';

describe('ContenidoanteproyectodescripcionComponent', () => {
  let component: ContenidoanteproyectodescripcionComponent;
  let fixture: ComponentFixture<ContenidoanteproyectodescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectodescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectodescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
