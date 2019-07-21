import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationAndExpressionComponent } from './interpolation-and-expression/interpolation-and-expression.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
// tslint:disable-next-line: max-line-length
import { AngularDirectiveUsingFormsModuleComponent } from './angular-directive-using-forms-module/angular-directive-using-forms-module.component';
import { TemaplateReferenceVariableComponent } from './temaplate-reference-variable/temaplate-reference-variable.component';
import { AndularDirectiveNgIfComponent } from './andular-directive-ng-if/andular-directive-ng-if.component';
import { AndularDirectiveNgForComponent } from './andular-directive-ng-for/andular-directive-ng-for.component';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationAndExpressionComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'angular-directive', component: AngularDirectiveUsingFormsModuleComponent },
  { path: 'template-ref-variable', component: TemaplateReferenceVariableComponent },
  { path: 'ngif', component: AndularDirectiveNgIfComponent},
  { path: 'ngfor', component: AndularDirectiveNgForComponent},
  { path: 'user-dashboard', loadChildren: './user-dashboard/user-dashboard.module#UserDashboardModule'},
  { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsModule'},
  { path: 'streams', component: StreamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
