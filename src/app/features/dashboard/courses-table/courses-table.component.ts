import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { CourseActions } from './store/course.actions';
import { Observable } from 'rxjs';
import { selectIsLoading, selectCourses } from './store/course.selectors';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.scss'
})
export class CoursesTableComponent implements OnInit{
  role$: Observable<boolean>;
  courses$: Observable<ICourse[]>
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = ['id', 'courseName', 'courseClassQty', 'hoursQty', 'teacherName'];

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private authService: AuthService
  ) {
    this.courses$ = this.store.select(selectCourses),
    this.isLoading$ = this.store.select(selectIsLoading);
    this.role$ = authService.getUserRole()
  }

  ngOnInit(): void {
    this.store.dispatch(CourseActions.loadCourses());

    this.role$.subscribe(role => {
      if (role) {
        this.displayedColumns.push('edit', 'delete');
      }
    });
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

  createCourse(course: ICourse): void {
    this.store.dispatch(CourseActions.createCourse({ course }));
  }

  updateCourse(id: string, update: Partial<ICourse>):void {
    this.store.dispatch(CourseActions.updateCourse({ id, update }));
  }

  deleteCourse(id: string): void {
    this.store.dispatch(CourseActions.deleteCourse({ id }));
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
