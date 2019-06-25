import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temaplate-reference-variable',
  templateUrl: './temaplate-reference-variable.component.html',
  styleUrls: ['./temaplate-reference-variable.component.scss']
})
export class TemaplateReferenceVariableComponent implements OnInit {

  title: string;
  name: string;

  message = 'Template Ref Variable';
  constructor() {
    this.name = 'Raj Kumar';
    this.title = 'Temaplate Reference Variable i.e #VariableName';
  }

  ngOnInit() {
  }

  handleClick(value: string) {
    this.name = value;
  }
}
