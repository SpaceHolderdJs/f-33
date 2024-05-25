import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserType } from '../types';
import { NgIf } from '@angular/common';
import { UsersComponent } from './users/users.component';

// @ - Decorator

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'initial-project';

  name: string = 'Igor';
  age: number = 24;
  city: string = 'Kyiv';

  counter: number = 0;

  // TypeScript
  user: UserType = {
    email: 'email@gmail.com',
    password: 'password',
  };

  isUserAdmin: boolean = false;

  // string[]
  names: Array<string> = ['Mark', 'Igor', 'Olena', 'Oleg'];

  increase() {
    this.counter = this.counter + 1;
  }

  decrease() {
    this.counter = this.counter - 1;
  }

  changeUserName() {
    const randomName =
      this.names[Math.floor(Math.random() * this.names.length)];

    this.name = randomName;
  }

  setUserAdmin() {
    this.isUserAdmin = !this.isUserAdmin;
  }
}
