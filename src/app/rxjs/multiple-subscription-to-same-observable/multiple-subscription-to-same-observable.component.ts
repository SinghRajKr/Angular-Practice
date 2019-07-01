import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multiple-subscription-to-same-observable',
  templateUrl: './multiple-subscription-to-same-observable.component.html',
  styleUrls: ['./multiple-subscription-to-same-observable.component.scss']
})
export class MultipleSubscriptionToSameObservableComponent implements OnInit {
  constructor() {}

  observable: Observable<any>;
  results: string[] = [];
  flag = false;
  observerOne: any;
  observerTwo: any;

  ngOnInit() {
    this.myObservable();
  }

  myObservable() {
    this.observable = Observable.create(observer => {
      try {
        observer.next('Hello There!');
        setInterval(() => {
          observer.next('This is Single Observable with multiple subscription.');
        }, 2000);
      } catch (err) {
        observer.error(err);
      }
    });
  }

  useObservable() {
    this.observerOne = this.observable.subscribe(
      (response: string) => {
        this.flag = true;
        this.results.push(response);
      }
    );

    this.observerTwo = this.observable.subscribe(
      (response: string) => {
        this.flag = true;
        this.results.push(response);
      }
    );

    // Observer two is child of observer one
    this.observerOne.add(this.observerTwo);
    // this.observerOne.remove(this.observerTwo); --- This statement is for removing observer two from one

    setTimeout( () => {
      // This will be executed after 2001 ms.It means two emitted events will be received to both observer.
      this.observerOne.unsubscribe();
      // this.observerTwo.unsubscribe();
      // We have added observer two as child of one so we don't need to
      // unsubscribe it bcoz unsubscription of one will work for both.
      // If we want to unsubscribe we can do that by above statment then we don't need to add observer two as child of one.
    }, 2001);
  }

}
