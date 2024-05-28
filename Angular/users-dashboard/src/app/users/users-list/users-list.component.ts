import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import { UserType } from '../users.types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  // data
  users: Array<UserType> = [];

  // hooks
  ngOnInit() {
    this.users = this.generateUsers();
  }

  // other functions

  generateUsers() {
    const users = new Array(15).fill(0);

    return users.map((element, index) => {
      return {
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        salary: faker.number.int({ min: 500, max: 6000 }),
        job: faker.person.jobTitle(),
        image: faker.image.avatar()
      }
    });
  }
}