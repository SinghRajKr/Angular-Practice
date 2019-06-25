import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  title: string;
  name: string;
  message: string;
  handleTitle: string;
  constructor() {
    this.title = 'Event Binding Property';
    this.name = 'Raj Kumar';
    this.message = 'Wecome to Two way Data Binding using Event handler.';
    this.handleTitle = 'You Can Change My Title';
  }

  ngOnInit() {
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log('It Gives Entire input', event);
  }

  handleInput(event: any) {
    this.message = event.target.value;
  }

  handleClick(){
    this.handleTitle = 'My Title Got Changed By Click Event Handler.';
  }
}
