import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andular-directive-ng-for',
  templateUrl: './andular-directive-ng-for.component.html',
  styleUrls: ['./andular-directive-ng-for.component.scss']
})
export class AndularDirectiveNgForComponent implements OnInit {
  title: string;
  currentDate = new Date();
  colors: any = [
    {
      colorName: 'red',
      colorValue: '#f00',
      child:  {
        name: 'Photos',
        updated: new Date('1/1/16'),
        likes: 2
      }
    },
    {
      colorName: 'green',
      colorValue: '#0f0',
      child: {
        name: 'Recipes',
        updated: new Date('1/17/16'),
        likes: 20
      }
    },
    {
      colorName: 'blue',
      colorValue: '#00f',
      child: {
        name: 'Work',
        updated: new Date('1/28/16'),
        likes: null
      }
    },
   ];

  constructor() {
    this.title = 'Angular Directive *ngFor';
   }
  ngOnInit() {
  }
}
