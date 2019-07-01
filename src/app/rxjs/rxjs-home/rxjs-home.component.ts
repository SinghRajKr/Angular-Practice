import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.scss']
})
export class RxjsHomeComponent implements OnInit {
  observable: Observable<any>;
  results: string[] = [];
  flag = false;
  completion = false;
  constructor() {}

  ngOnInit() {
    this.myObservable();
  }

  myObservable() {
    this.observable = Observable.create(observer => {
      try {
        observer.next('Welcome');
        observer.next('To');
        observer.next('Rxjs');
        observer.next('Concept');
        observer.complete();
        observer.next('This will not be send!');
      } catch (err) {
        observer.error(err);
      }
    });
  }

  useObservable() {
    this.observable.subscribe(
      (response: string) => {
        this.results.push(response);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.flag = true;
        this.completion = true;
        console.log('Completed');
      }
    );
  }
}
