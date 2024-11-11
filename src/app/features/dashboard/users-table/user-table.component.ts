import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UserActions } from './store/user.actions';
import { Observable } from 'rxjs';
import { selectIsLoading, selectUsers } from './store/user.selectors';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit{
  users$: Observable<IUser[]>
  isLoading$: Observable<boolean>;
  displayedColumns: string[] = ['id', 'firstName', 'email', 'edit', 'delete'];

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {
    this.users$ = this.store.select(selectUsers),
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
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

  createUser(user: IUser): void {
    this.store.dispatch(UserActions.createUser({ user }));
  }


  updateUsers(id: string, update: Partial<IUser>): void {
    this.store.dispatch(UserActions.updateUser({ id, update }));
  }

  deleteUsers(id: string): void {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  openDialog(modalType: string, action: string, element: IUser | null): void {
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
