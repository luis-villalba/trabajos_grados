import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectoComponent } from './contenidoanteproyecto.component';

describe('ContenidoanteproyectoComponent', () => {
  let component: ContenidoanteproyectoComponent;
  let fixture: ComponentFixture<ContenidoanteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
