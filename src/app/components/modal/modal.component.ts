import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse, IStudent } from '../../models';
import { ICourseSummary } from '../../models/index';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class  ModalComponent {
  element: IStudent | ICourse | ICourseSummary | null = null;
  displayName: string = '';
  student: IStudent | null = null;
  course: ICourse | null = null;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { action: 'Delete' | 'Edit' | 'Create' | 'Add'; entity: 'Course' | 'Student'; element: IStudent | ICourse | ICourseSummary | null }
  ) {
    this.element = data.element;
    if (this.element) {
      if (data.entity === 'Student') {
        this.student = this.element as IStudent;
        this.displayName = `${this.student.firstName} ${this.student.lastName}`;
      } else if (data.entity === 'Course') {
        this.course = this.element as ICourse;
        this.displayName = this.course.courseName;
      }
    }
  }

  onDelete(): void {
    this.dialogRef.close('deleted');
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
