import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndularDirectiveNgForComponent } from './andular-directive-ng-for.component';

describe('AndularDirectiveNgForComponent', () => {
  let component: AndularDirectiveNgForComponent;
  let fixture: ComponentFixture<AndularDirectiveNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndularDirectiveNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndularDirectiveNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
