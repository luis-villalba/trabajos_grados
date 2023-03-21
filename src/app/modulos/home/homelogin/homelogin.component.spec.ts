import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloginComponent } from './homelogin.component';

describe('HomeloginComponent', () => {
  let component: HomeloginComponent;
  let fixture: ComponentFixture<HomeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
