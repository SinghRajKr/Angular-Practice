import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndularDirectiveNgIfComponent } from './andular-directive-ng-if.component';

describe('AndularDirectiveNgIfComponent', () => {
  let component: AndularDirectiveNgIfComponent;
  let fixture: ComponentFixture<AndularDirectiveNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndularDirectiveNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndularDirectiveNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
