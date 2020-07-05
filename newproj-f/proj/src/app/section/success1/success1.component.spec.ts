import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Success1Component } from './success1.component';

describe('Success1Component', () => {
  let component: Success1Component;
  let fixture: ComponentFixture<Success1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Success1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Success1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
