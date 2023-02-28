import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponent } from './person-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppModule } from '../app.module';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonListComponent ],
      imports: [MatDialogModule, AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
