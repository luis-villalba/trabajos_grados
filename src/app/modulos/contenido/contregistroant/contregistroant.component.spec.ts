import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContregistroantComponent } from './contregistroant.component';

describe('ContregistroantComponent', () => {
  let component: ContregistroantComponent;
  let fixture: ComponentFixture<ContregistroantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContregistroantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContregistroantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
