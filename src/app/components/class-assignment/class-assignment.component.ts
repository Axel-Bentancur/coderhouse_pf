import { Component, OnInit, signal } from '@angular/core';
import { ICourseSummary } from '../../models';
import { CoursesService } from '../../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-class-assignment',
  templateUrl: './class-assignment.component.html',
  styleUrl: './class-assignment.component.scss'
})
export class ClassAssignmentComponent implements OnInit{
  courses: ICourseSummary[] | null = null;
  isLoading = false;
  panelOpenState = signal(false);

  constructor(public dialog: MatDialog, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  loadCourse(): void {
    this.isLoading = true;
    this.coursesService.getSummaryCourses().subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
    console.log(this.courses)
  }

  removeStudent(courseId: number, studentId: number): void {
    this.isLoading = true;
    this.coursesService.deleteStudent(courseId, studentId).subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  addStudent(courseId: number, studentId: number): void {
    this.isLoading = true;
    this.coursesService.addStudent(courseId, studentId).subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  openDialog(action: 'Add', entity: string, element: ICourseSummary | null): void {
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
