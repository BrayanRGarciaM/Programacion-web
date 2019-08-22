import { Component } from '@angular/core';
import {Person} from './model/person';
import { PersonService } from './person/person.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploservicio';
  mipersona = new Person(2, 'Bob', 20);

  constructor(private personService: PersonService) { }

  recuperarPersona() {
    this.mipersona = this.personService.findPerson(2);
  }
  cambiarPersona() {
    this.mipersona = new Person(1, 'Alice', 20);
  }
}
