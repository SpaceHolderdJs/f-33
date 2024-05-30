import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  constructor(public usersService: UsersService) { }

  ngOnInit() {
    console.log(window.location.pathname.split('/').at(-1));
    console.log(this.usersService.users, "users");
  }
}
