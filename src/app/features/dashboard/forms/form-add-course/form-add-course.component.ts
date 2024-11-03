import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICourse, IStudent } from '../../../../core/models';
import { StudentsService } from '../../../../core/services/students.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-add-course',
  templateUrl: './form-add-course.component.html',
  styleUrl: './form-add-course.component.scss'
})
export class FormAddCourseComponent {
  formAdd: FormGroup;
  isLoading = false;
  @Input() studentList : IStudent[] = [];
  @Input() course: ICourse | null = null;
  @Input() action: string = '';
  @Input() modalType: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private matdialogRef: MatDialogRef<FormAddCourseComponent>,
    private studentsService: StudentsService
  ) {
    this.formAdd = this.formBuilder.group({
      selectedStudent: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isLoading = true;
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.studentList = students;
      },
      error: (err) => {
        if (err instanceof Error) {
          console.error(`An unexpected error occurred: ${err.message}`);
        } else if (err instanceof HttpErrorResponse) {
          if (err.status === 0) {
            console.error('Could not connect to the server. Please check your network connection.');
          } else if (err.status >= 400 && err.status < 500) {
            console.error(`Client error: ${err.error?.message || 'Invalid request. Please try again.'}`);
          } else if (err.status >= 500) {
            console.error('Server error: Please try again later.');
          } else {
            console.error(`Unexpected error: ${err.statusText}`);
          }
        } else {
          console.error('An unknown error occurred. Please try again later.');
        }
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onCancel(): void {
    this.matdialogRef.close();
  }

  onSubmit(): void {
    if (this.formAdd.valid) {
      this.matdialogRef.close(this.formAdd.value.selectedStudent);
    } else {
      console.error('Form is invalid', this.formAdd.errors);
    }
  }
}
