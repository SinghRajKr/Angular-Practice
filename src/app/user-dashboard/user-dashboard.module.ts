import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { UserCountComponent } from './user-count/user-count.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserCountComponent,
    UserDetailsComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MaterialModule
  ]
})
export class UserDashboardModule { }
