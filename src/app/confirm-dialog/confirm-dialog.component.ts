import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  accessAgeControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  confirmAction() {
    this.dialogRef.close(this.accessAgeControl.value);
  }
}
