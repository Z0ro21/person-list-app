import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  personList: Person[] = this.personService.getPersonList();

  personForm = this.fb.group({
    name: '',
    lastName: '',
    age: '',
    location: '',
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private personService: PersonService) {
  }

  addPerson() {
    this.personService.addPerson(this.getPerson());
    this.personForm.reset();
  }

  deletePerson(index: number) {
    this.personService.removePerson(index);
  }

  getPerson(): Person {
    return {
      name: this.personForm.value.name || '',
      lastName: this.personForm.value.lastName || '',
      age: Number(this.personForm.value.age) || 0,
      location: this.personForm.value.location || ''
    }
  }

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(accessAge => {
      if (accessAge) {
        this.router.navigate(['filtered-person-list'], {queryParams: {accessAge}});
      }
    });
  }
}
