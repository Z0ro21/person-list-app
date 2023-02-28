import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

const PERSON = {
  name: 'Joe',
  lastName: 'Smith',
  age: 23,
  location: 'Canada'
}

const PERSON_TWO = {
  name: 'Carlos',
  lastName: 'Gonzales',
  age: 36,
  location: 'Mexico'
}

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#addPerson should add a person to the list', () => {
    service.addPerson(PERSON);
    expect(service.getPersonList()).toEqual([PERSON]);
  });

  it('#removePerson should remove a person to the list', () => {
    service.addPerson(PERSON);
    service.addPerson(PERSON_TWO);

    service.removePerson(0);

    expect(service.getPersonList()).toEqual([PERSON_TWO]);
  });

  it('#getPersonList should return the full person list', () => {
    service.addPerson(PERSON);
    service.addPerson(PERSON_TWO);

    const list = service.getPersonList();

    expect(list).toEqual([PERSON, PERSON_TWO]);
  });

  it('#clearPersonList should clear the full person list', () => {
    service.addPerson(PERSON);
    service.addPerson(PERSON_TWO);

    service.clearPersonList();
    const list = service.getPersonList();

    expect(list.length).toEqual(0);
  });

  it('#getAllowedPersonList should return the full person list', () => {
    service.addPerson(PERSON);
    service.addPerson(PERSON_TWO);

    const list = service.getAllowedPersonList(25);

    expect(list).toEqual([PERSON_TWO]);
  });

  it('#getDeniedPersonList should return the full person list', () => {
    service.addPerson(PERSON);
    service.addPerson(PERSON_TWO);

    const list = service.getDeniedPersonList(25);

    expect(list).toEqual([PERSON]);
  });
});
