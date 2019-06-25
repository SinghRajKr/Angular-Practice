import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationAndExpressionComponent } from './interpolation-and-expression.component';

describe('InterpolationAndExpressionComponent', () => {
  let component: InterpolationAndExpressionComponent;
  let fixture: ComponentFixture<InterpolationAndExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationAndExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationAndExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
