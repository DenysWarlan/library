import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloggedInComponent } from './unlogged-in.component';

describe('UnloggedInComponent', () => {
  let component: UnloggedInComponent;
  let fixture: ComponentFixture<UnloggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnloggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
