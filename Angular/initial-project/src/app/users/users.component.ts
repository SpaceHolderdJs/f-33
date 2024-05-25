import { Component } from '@angular/core';
import { UserType } from '../../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {

  users: Array<UserType> = [
    { email: 'email@gmail.com', password: '12345' },
    {
      email: 'email@gmail2.com',
      password: '12345',
    },
    {
      email: 'email@gmail3.com',
      password: '12345',
    },
    {
      email: 'email@gmail4.com',
      password: '12345',
    },
  ];

  selectedUser = this.users[0];

  onUserClick(user: UserType) {
    const userIndex = this.users.findIndex((u) => u.email === user.email);
    if (userIndex !== -1) this.selectedUser = this.users[userIndex];
  }
}
