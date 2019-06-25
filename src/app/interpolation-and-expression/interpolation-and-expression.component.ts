import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-and-expression',
  templateUrl: './interpolation-and-expression.component.html',
  styleUrls: ['./interpolation-and-expression.component.scss']
})
export class InterpolationAndExpressionComponent implements OnInit {
  title: string;
  numberOne: number;
  numberTwo: number;
  areYouHappy: boolean;
  constructor() {
  }

  ngOnInit() {
    this.title = 'Interpolation  & Expression';
    this.numberOne = 100;
    this.numberTwo = 200;
  }

  changeHappyStatus(event: any) {
    this.areYouHappy = true;
  }
}
