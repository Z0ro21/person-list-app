import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-filtered-person-list',
  templateUrl: './filtered-person-list.component.html',
  styleUrls: ['./filtered-person-list.component.scss']
})
export class FilteredPersonListComponent {
  accessAge: number = 0;
  allowedPersonList: Person[] = [];
  deniedPersonList: Person[] = [];

  constructor(private personService: PersonService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.accessAge = params['accessAge'];
    });
    console.log(this.accessAge);
    this.allowedPersonList = this.personService.getAllowedPersonList(this.accessAge);
    this.deniedPersonList = this.personService.getDeniedPersonList(this.accessAge);
  }

}
