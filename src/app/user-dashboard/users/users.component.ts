import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: string;
  users: User[];
  constructor() {
    this.title = 'Data Sharing between Parent to Child & Child to Parent';
   }

  ngOnInit() {
    console.log('NgOnInit Life Cycle');
    this.users = [
      {
        name: 'Raj',
        age: 33,
        active: true,
        dob: new Date('9/1/20'),
        child: {
          name: 'Tobby',
        }
      },
      {
        name: 'Yash',
        age: 50,
        active: true,
        dob: new Date('1/1/16'),
        child:  {
          name: 'John',
        }
      },
      {
        name: 'Push',
        age: 44,
        active: false,
        dob: new Date('1/1/16'),
        child: {
          name: 'Crysty',
        }
      },
      {
        name: 'Sai',
        age: 18,
        active: true,
        dob: new Date('1/1/19'),
        child:  {
          name: 'Sweety',
        }
      },
     ];
  }

}
