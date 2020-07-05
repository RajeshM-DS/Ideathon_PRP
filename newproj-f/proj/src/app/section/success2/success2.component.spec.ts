import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Success2Component } from './success2.component';

describe('Success2Component', () => {
  let component: Success2Component;
  let fixture: ComponentFixture<Success2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Success2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Success2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
