import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoanteproyectotitleComponent } from './contenidoanteproyectotitle.component';

describe('ContenidoanteproyectotitleComponent', () => {
  let component: ContenidoanteproyectotitleComponent;
  let fixture: ComponentFixture<ContenidoanteproyectotitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoanteproyectotitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoanteproyectotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
