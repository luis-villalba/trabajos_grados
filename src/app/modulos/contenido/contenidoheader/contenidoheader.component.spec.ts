import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoheaderComponent } from './contenidoheader.component';

describe('ContenidoheaderComponent', () => {
  let component: ContenidoheaderComponent;
  let fixture: ComponentFixture<ContenidoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
