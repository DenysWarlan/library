import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankForRegisterComponent } from './thank-for-register.component';

describe('ThankForRegisterComponent', () => {
  let component: ThankForRegisterComponent;
  let fixture: ComponentFixture<ThankForRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankForRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankForRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
