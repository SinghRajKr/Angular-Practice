import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { InterpolationAndExpressionComponent } from './interpolation-and-expression/interpolation-and-expression.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AngularDirectiveUsingFormsModuleComponent } from './angular-directive-using-forms-module/angular-directive-using-forms-module.component';
import { TemaplateReferenceVariableComponent } from './temaplate-reference-variable/temaplate-reference-variable.component';
import { AndularDirectiveNgIfComponent } from './andular-directive-ng-if/andular-directive-ng-if.component';
import { AndularDirectiveNgForComponent } from './andular-directive-ng-for/andular-directive-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsOperatorComponent,
    InterpolationAndExpressionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AngularDirectiveUsingFormsModuleComponent,
    TemaplateReferenceVariableComponent,
    AndularDirectiveNgIfComponent,
    AndularDirectiveNgForComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
