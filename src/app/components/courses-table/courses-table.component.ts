import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { CoursesService } from '../../services/courses.service';

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

  loadCourses(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  createCourse(course: ICourse): void {
    this.isLoading = true;
    this.coursesService.createCourse(course).subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  updateCourse(id: number, update: ICourse):void {
    this.isLoading = true;
    this.coursesService.updateCourse(id, update).subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  deleteCourse(id: number): void {
    this.isLoading = true;
    this.coursesService.deleteCourse(id).subscribe({
      next: (course) => {
        this.courses = course;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  openDialog(action: 'Create' | 'Edit' | 'Delete', entity: string, element: ICourse | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        action: action,
        entity: entity,
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
