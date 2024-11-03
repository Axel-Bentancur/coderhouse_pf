import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CoursesService } from '../../../core/services/courses.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent implements OnInit{
  courses:ICourse[] = []
  isLoading = false;
  displayedColumns: string[] = ['id', 'courseName', 'courseClassQty', 'hoursQty', 'teacherName', 'edit', 'delete'];

  constructor(public dialog: MatDialog, private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.loadCourses()
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

  loadCourses(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    })
  }


  createCourse(course: ICourse): void {
    this.isLoading = true;
    this.coursesService.createCourse(course).subscribe({
      next: (course) => {
        this.courses.push(course);
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  updateCourse(id: string, update: ICourse):void {
    this.isLoading = true;
    this.coursesService.updateCourse(id, update).subscribe({
      next: (course) => {
        this.courses = course;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  deleteCourse(id: string): void {
    this.isLoading = true;
    this.coursesService.deleteCourse(id).subscribe({
      next: (course) => {
        this.courses = course;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  openDialog(modalType: string, action: string, element: ICourse | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        modalType: modalType,
        action: action,
        element: element,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        if (action === 'Edit' && element) {
          this.updateCourse(element.id, result)
        } else if (action === 'Delete' && element) {
          this.deleteCourse(element.id)
        } else {
          this.createCourse(result)
        }
      }
    });

  }
}
