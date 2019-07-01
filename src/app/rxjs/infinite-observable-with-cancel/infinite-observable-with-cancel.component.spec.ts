import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteObservableWithCancelComponent } from './infinite-observable-with-cancel.component';

describe('InfiniteObservableWithCancelComponent', () => {
  let component: InfiniteObservableWithCancelComponent;
  let fixture: ComponentFixture<InfiniteObservableWithCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteObservableWithCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteObservableWithCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
