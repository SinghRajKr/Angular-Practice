import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';

const routes: Routes = [
  { path: '', component: RxjsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
