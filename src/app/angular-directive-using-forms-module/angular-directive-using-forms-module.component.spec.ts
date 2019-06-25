import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectiveUsingFormsModuleComponent } from './angular-directive-using-forms-module.component';

describe('AngularDirectiveUsingFormsModuleComponent', () => {
  let component: AngularDirectiveUsingFormsModuleComponent;
  let fixture: ComponentFixture<AngularDirectiveUsingFormsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDirectiveUsingFormsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDirectiveUsingFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
