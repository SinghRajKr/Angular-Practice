import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  clickEventStreamsCode;
  setTimeoutOutputCode;
  setIntervalOutputCode;
  setTimeoutSetIntervalCode;
  clickEventStreams;
  setTimeoutOutput;
  setIntervalOutput;
  count = 0;
  currentTime;

  constructor() { }

  ngOnInit() {
    document.addEventListener('click', (clickEvent) => {
      this.clickEventStreams = clickEvent;
      console.log('Mouse Click Event', this.clickEventStreams);
    });


    setTimeout(() => {
      this.setTimeoutOutput = 'SetTimeout Finished After 10 Seconds!';
    }, 10000);

    setInterval( () => {
      this.count = this.count + 1;
      this.setIntervalOutput = `SetInterval Count : ${this.count}`;
    }, 1000);

    this.refreshTimeUpto30Seconds( );

    this.clickEventStreamsCode = `<pre>document.addEventListener('click', (clickEvent) => {
      this.clickEventStreams = clickEvent;
      console.log('Mouse Click Event', this.clickEventStreams);
    }); </pre>`;

    this.setTimeoutOutputCode = `<pre>setTimeout(() => {
      this.setTimeoutOutput = 'SetTimeout Finished After 10 Seconds!';
    }, 10000);</pre>`;

    this.setIntervalOutputCode = `<pre>setInterval( () => {
      this.count = this.count + 1;
      this.setIntervalOutput = SetInterval Count : $ {this.count}';
    }, 1000);</pre>`;


    this.setTimeoutSetIntervalCode = `<pre>
    refreshTimeUpto30Seconds( ) {
      setTimeout(() => {
        setInterval( () => {
          this.currentTime = new Date();
          console.log('Current Time', this.currentTime);
        }, 1000);
      }, 5000);
    }
    </pre>`;
  }

  refreshTimeUpto30Seconds( ) {
    setTimeout(() => {
      setInterval( () => {
        this.currentTime = new Date();
        console.log('Current Time', this.currentTime);
      }, 1000);
    }, 5000);
  }


}
