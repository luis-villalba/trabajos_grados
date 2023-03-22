import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosliderComponent } from './contenidoslider.component';

describe('ContenidosliderComponent', () => {
  let component: ContenidosliderComponent;
  let fixture: ComponentFixture<ContenidosliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidosliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
