import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaplateReferenceVariableComponent } from './temaplate-reference-variable.component';

describe('TemaplateReferenceVariableComponent', () => {
  let component: TemaplateReferenceVariableComponent;
  let fixture: ComponentFixture<TemaplateReferenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaplateReferenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaplateReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
