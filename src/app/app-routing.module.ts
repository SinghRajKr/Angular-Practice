import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationAndExpressionComponent } from './interpolation-and-expression/interpolation-and-expression.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
// tslint:disable-next-line: max-line-length
import { AngularDirectiveUsingFormsModuleComponent } from './angular-directive-using-forms-module/angular-directive-using-forms-module.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationAndExpressionComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'angular-directive', component: AngularDirectiveUsingFormsModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
