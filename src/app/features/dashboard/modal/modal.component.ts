import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICourse, IStudent, IUser } from '../../../core/models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class  ModalComponent {
  user: IUser | null = null;
  student: IStudent | null = null;
  course: ICourse | null = null;
  element: IStudent | ICourse | IUser | null = null;
  action: string = '';
  modalType: string = '';
  displayName: string = '';

  constructor(
    private matdialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { modalType: string; action: string; element: IStudent | ICourse | IUser | null, student: IStudent }
  ) {
    this.element = data.element;
    this.action = data.action;
    this.modalType = data.modalType;
    this.student = data.student || null;

    if (this.element) {
      if (this.modalType === 'Student') {
        this.student = this.element as IStudent;
        this.displayName = `${this.student.firstName} ${this.student.lastName}`;
      } else if (this.modalType === 'Course') {
        this.course = this.element as ICourse;
        this.displayName = this.course.courseName;

        if (this.student) {
          this.displayName = `${this.student.firstName} ${this.student.lastName}`;
        }
      } else if (this.modalType === 'User') {
        this.user = this.element as IUser;
        this.displayName = `${this.user.firstName} ${this.user.lastName}`;
      }
    } else {
      console.warn('No element provided for modal.');
    }
  }

  onDelete(): void {
    this.matdialogRef.close('deleted');
  }

  onCancel(): void {
    this.matdialogRef.close();
  }
}
