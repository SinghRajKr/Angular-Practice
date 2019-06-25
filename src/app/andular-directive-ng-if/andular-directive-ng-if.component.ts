import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andular-directive-ng-if',
  templateUrl: './andular-directive-ng-if.component.html',
  styleUrls: ['./andular-directive-ng-if.component.scss']
})
export class AndularDirectiveNgIfComponent implements OnInit {
  title: string;
  search = '';

  constructor() {
    this.title = 'Angular Directive *ngIf';
   }

  ngOnInit() {
  }

  handleChange(value: string) {
    this.search = value;
  }

}
