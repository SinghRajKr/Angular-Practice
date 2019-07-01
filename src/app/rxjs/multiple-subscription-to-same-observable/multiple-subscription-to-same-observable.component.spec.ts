import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSubscriptionToSameObservableComponent } from './multiple-subscription-to-same-observable.component';

describe('MultipleSubscriptionToSameObservableComponent', () => {
  let component: MultipleSubscriptionToSameObservableComponent;
  let fixture: ComponentFixture<MultipleSubscriptionToSameObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSubscriptionToSameObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSubscriptionToSameObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
