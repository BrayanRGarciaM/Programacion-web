import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personDatabase = [
    new Person(0, 'Alice', 20),
    new Person(1, 'Bob', 21),
    new Person(2, 'Charles', 22)
  ];
  constructor() {}
  findPerson(id: number): Person {
    return this.personDatabase[id];
  }
}
