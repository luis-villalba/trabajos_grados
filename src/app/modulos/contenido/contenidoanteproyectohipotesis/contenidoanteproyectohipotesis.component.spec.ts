import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectohipotesisComponent } from './contenidoanteproyectohipotesis.component';

describe('ContenidoanteproyectohipotesisComponent', () => {
  let component: ContenidoanteproyectohipotesisComponent;
  let fixture: ComponentFixture<ContenidoanteproyectohipotesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectohipotesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectohipotesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
