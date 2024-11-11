import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import { Observable } from 'rxjs';
import { selectIsLoading, selectStudents } from './store/student.selectors';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit{
  role$: Observable<boolean>;
  students$: Observable<IStudent[]>
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = ['id', 'firstName', 'address', 'phone', 'email', 'view'];

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private authService: AuthService
  ) {
    this.students$ = this.store.select(selectStudents),
    this.isLoading$ = this.store.select(selectIsLoading);
    this.role$ = authService.getUserRole()
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());

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

  createUser(student: IStudent): void {
    this.store.dispatch(StudentActions.createStudent({ student }));
  }


  updateUsers(id: string, update: Partial<IStudent>): void {
    this.store.dispatch(StudentActions.updateStudent({ id, update }));
  }

  deleteUsers(id: string): void {
    this.store.dispatch(StudentActions.deleteStudent({ id }));
  }

  openDialog(modalType: string, action: string, element: IStudent | null): void {
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
          this.updateUsers(element.id, result)
        } else if (action === 'Delete' && element) {
          this.deleteUsers(element.id)
        } else {
          this.createUser(result)
        }
      }
    });

  }
}
