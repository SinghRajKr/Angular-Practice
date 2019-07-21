import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotAndColdObservableComponent } from './hot-and-cold-observable.component';

describe('HotAndColdObservableComponent', () => {
  let component: HotAndColdObservableComponent;
  let fixture: ComponentFixture<HotAndColdObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotAndColdObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotAndColdObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
