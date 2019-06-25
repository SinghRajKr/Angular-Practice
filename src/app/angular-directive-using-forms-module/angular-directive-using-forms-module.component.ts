import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-angular-directive-using-forms-module',
  templateUrl: './angular-directive-using-forms-module.component.html',
  styleUrls: ['./angular-directive-using-forms-module.component.scss']
})
export class AngularDirectiveUsingFormsModuleComponent implements OnInit {

  title: string;
  name: string;
// tslint:disable-next-line: max-line-length
  message = 'Combination of both makes [(ngModel)]. [ngModel] is one way data binding like property binding. Here with the help of (ngModelChange) helps us to achieve two way data binding.';
  constructor() {
    this.name = 'Raj Kumar';
    this.title = 'Angular Directives:  [ngModel] and (ngModelChange)';
  }

  ngOnInit() {
  }

  handleChange(value: string) {
    this.name = value;
  }

}
