import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonListComponent} from './person-list/person-list.component';
import { FilteredPersonListComponent } from './filtered-person-list/filtered-person-list.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'filtered-person-list', component: FilteredPersonListComponent },
  { path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
