import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Contacts } from './contacts/contacts';
import { Lessons } from './lessons/lessons';
import { Services } from './services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Contacts, Lessons, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('drivingSchool');
}
