import { Component, OnInit, signal } from '@angular/core';
import { ICourse, IStudent } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ClassActions } from './store/class.actions';
import { selectClasses, selectIsLoading } from './store/class.selectors';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-class-assignment',
  templateUrl: './class-assignment.component.html',
  styleUrl: './class-assignment.component.scss'
})
export class ClassAssignmentComponent implements OnInit{
  role$: Observable<boolean>;
  courses$: Observable<ICourse[]>
  isLoading$: Observable<boolean>;
  panelOpenState = signal(false);

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private authService: AuthService
  ) {
    this.courses$ = this.store.select(selectClasses),
    this.isLoading$ = this.store.select(selectIsLoading);
    this.role$ = authService.getUserRole()
  }

  ngOnInit(): void {
    this.store.dispatch(ClassActions.loadClasses());
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

  addStudent(courseId: string, studentId: string): void {
    this.store.dispatch(ClassActions.updateClass({ courseId, studentId }))
  }

  removeStudent(courseId: string, studentId: string): void {
    this.store.dispatch(ClassActions.deleteClass({ courseId, studentId }))
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
