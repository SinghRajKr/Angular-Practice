import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infinite-observable-with-cancel',
  templateUrl: './infinite-observable-with-cancel.component.html',
  styleUrls: ['./infinite-observable-with-cancel.component.scss']
})
export class InfiniteObservableWithCancelComponent implements OnInit {
  constructor() {}

  observable: Observable<any>;
  results: string[] = [];
  flag = false;
  observer: any;

  ngOnInit() {
    this.myObservable();
  }

  myObservable() {
    this.observable = Observable.create( (observer) => {
      try {
        observer.next('Hello There!');
        observer.next('Do You want to learn Rxjs Concept?');
        setInterval(() => {
          observer.next('Yes ! I want to Learn.');
        }, 2000);
      } catch (err) {
        observer.error(err);
      }
    });
  }

  useObservable() {
    this.observer = this.observable.subscribe(
      (response: string) => {
        this.flag = true;
        this.results.push(response);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        // This will not executed bcoz observer.complete() is not defined.
        this.results.push('Subscription Cancelled After 4001 ms. Now we will not receive any emitted value.');
      }
    );

    setTimeout( () => {
      this.observer.unsubscribe();
    }, 4001);
  }
}

// Following code is Producer
// Producer is activated when it's subscription is created

// (observer) => {
//   try {
//     observer.next('Hello There!');
//     observer.next('Do You want to learn Rxjs Concept?');
//     setInterval(() => {
//       observer.next('Yes ! I want to Learn.');
//     }, 2000);
//   } catch (err) {
//     observer.error(err);
//   }
// }
