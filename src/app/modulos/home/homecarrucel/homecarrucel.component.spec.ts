import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarrucelComponent } from './homecarrucel.component';

describe('HomecarrucelComponent', () => {
  let component: HomecarrucelComponent;
  let fixture: ComponentFixture<HomecarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecarrucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
