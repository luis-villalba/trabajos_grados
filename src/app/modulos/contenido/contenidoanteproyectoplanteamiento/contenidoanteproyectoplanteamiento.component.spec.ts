import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectoplanteamientoComponent } from './contenidoanteproyectoplanteamiento.component';

describe('ContenidoanteproyectoplanteamientoComponent', () => {
  let component: ContenidoanteproyectoplanteamientoComponent;
  let fixture: ComponentFixture<ContenidoanteproyectoplanteamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectoplanteamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectoplanteamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
