import { Injectable } from '@angular/core';

export interface Person {
  name: String;
  lastName: String;
  age: number;
  location: String
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personList: Person[] = [];

  constructor() { }

  addPerson(person: Person) {
    this.personList.push(person);
  }

  removePerson(index: number) {
    this.personList.splice(index, 1);
  }

  getPersonList() {
    return this.personList;
  }

  clearPersonList() {
    this.personList = [];
  }

  getAllowedPersonList(accessAge: number) {
    return this.personList.filter(person => { return person.age >= accessAge; });
  }

  getDeniedPersonList(accessAge: number) {
    return this.personList.filter(person => { return person.age < accessAge; });

  }
}
