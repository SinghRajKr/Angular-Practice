import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.scss']
})
export class UserCountComponent implements OnInit {
  /**
   * Passing Data from parent component to child component
   */
  @Input()
  userCount: User[];
  title: string;
  constructor() {
    this.title = 'Users Count Component';
   }

  ngOnInit() {
  }

  activeUserCount() {
    if (!this.userCount) {
      return;
    }
    return this.userCount.filter((user: User) => user.active).length;
  }
}
