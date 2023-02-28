import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPersonListComponent } from './filtered-person-list.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from '../app.module';

describe('FilteredPersonListComponent', () => {
  let component: FilteredPersonListComponent;
  let fixture: ComponentFixture<FilteredPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteredPersonListComponent],
      imports: [AppModule, RouterTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilteredPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
