import { Component, OnInit, signal } from '@angular/core';
import { ICourse, IStudent } from '../../../core/models';
import { CoursesService } from '../../../core/services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-class-assignment',
  templateUrl: './class-assignment.component.html',
  styleUrl: './class-assignment.component.scss'
})
export class ClassAssignmentComponent implements OnInit{
  courses: ICourse[] | null = null;
  isLoading = false;
  panelOpenState = signal(false);

  constructor(public dialog: MatDialog, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  handleError(err: any): void {
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
  }

  loadCourse(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (course) => {
        this.courses = course;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  addStudent(courseId: string, studentId: string): void {
    this.isLoading = true;
    this.coursesService.addStudentToCourse(courseId, studentId).subscribe({
      next: (course) => {
        if (this.courses) {
          const index = this.courses.findIndex(c => c.id === course.id);
          if (index !== -1) {
            this.courses[index] = course;
          } else {
            this.courses.push(course);
          }
        } else {
          console.error('Courses array is null.');
        }
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  removeStudent(courseId: string, studentId: string): void {
    this.isLoading = true;
    this.coursesService.deleteStudent(courseId, studentId).subscribe({
      next: (updatedCourse) => {
        if (this.courses) {
          const index = this.courses.findIndex(course => course.id === updatedCourse.id);
          if (index !== -1) {
            this.courses[index] = updatedCourse;
          }
        }
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  openDialog(modalType: string, action: string, element: ICourse | null,  student?: IStudent): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        modalType: modalType,
        action: action,
        element: element,
        student
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const courseId = element?.id
      const studentId = student?.id

      if (!!result) {
        if (action === 'Add' && courseId && result.id) {
          this.addStudent(courseId, result.id)
        } else if (action === 'Remove' && courseId && studentId) {
          this.removeStudent(courseId, studentId)
        }
      }
    });
  }
}
