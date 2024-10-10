import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonElement } from '../../models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class  ModalComponent {
  student: PersonElement | null;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string; student: PersonElement | null }
  ) {
    this.student = data.student;
  }

  onDelete(): void {
    this.dialogRef.close('deleted');
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
