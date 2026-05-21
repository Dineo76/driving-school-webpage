import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Contacts } from './contacts/contacts';
import { Lessons } from './lessons/lessons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Contacts, Lessons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('drivingSchool');
}
