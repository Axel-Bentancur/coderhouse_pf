import { Component, OnInit, signal } from '@angular/core';
import { ICourse } from '../../../core/models';
import { CoursesService } from '../../../core/services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

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

  loadCourse(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
    console.log(this.courses)
  }

  addStudent(courseId: number, studentId: number): void {
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
      error: (err) => {
        console.error('Error adding student:', err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  removeStudent(courseId: number, studentId: number): void {
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
      error: (err) => {
        console.error('Error removing student:', err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  openDialog(action: 'Add', entity: string, element: ICourse | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        action: action,
        entity: entity,
        element: element,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const courseId = element?.id
      if (!!result && courseId) {
          this.addStudent(courseId, result)
      }
    });
  }
}
