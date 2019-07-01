import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { InfiniteObservableWithCancelComponent } from './infinite-observable-with-cancel/infinite-observable-with-cancel.component';
import { MultipleSubscriptionToSameObservableComponent } from './multiple-subscription-to-same-observable/multiple-subscription-to-same-observable.component';

@NgModule({
  declarations: [RxjsHomeComponent, InfiniteObservableWithCancelComponent, MultipleSubscriptionToSameObservableComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
