import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICourse, IStudentSummary } from '../../../models';
import { StudentsService } from '../../../services/students.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-add-course',
  templateUrl: './form-add-course.component.html',
  styleUrl: './form-add-course.component.scss'
})
export class FormAddCourseComponent {
  formAdd: FormGroup;
  isLoading = false;
  @Input() studentList : IStudentSummary[] = [];
  @Input() course: ICourse | null = null;

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
    this.studentsService.getSummaryStudents().subscribe({
      next: (students) => {
        this.studentList = students;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.formAdd.valid) {
      this.matdialogRef.close(this.formAdd.value.selectedStudent);
    } else {
      console.error('Form is invalid', this.formAdd.errors);
    }
  }
}
