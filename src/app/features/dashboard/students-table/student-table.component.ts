import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { StudentsService } from '../../../core/services/students.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit{
  students: IStudent[] = []
  isLoading = false;
  displayedColumns: string[] = ['id', 'firstName', 'address', 'phone', 'email', 'view', 'edit', 'delete'];

  constructor(public dialog: MatDialog, private StudentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.loadUsers()
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

  loadUsers(): void {
    this.isLoading = true;
    this.StudentsService.getStudents().subscribe({
      next: (users) => {
        this.students = users;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  createUser(student: IStudent): void {
    this.isLoading = true;
    this.StudentsService.createStudent(student).subscribe({
      next: (newStudent) => {
        this.students.push(newStudent);
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }


  updateUsers(id: string, update: Partial<IStudent>): void {
    this.isLoading = true;
    this.StudentsService.updateStudents(id, update).subscribe({
      next: (users) => {
        this.students = users;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  deleteUsers(id: string): void {
    this.isLoading = true;
    this.StudentsService.deleteStudent(id).subscribe({
      next: (users) => {
        this.students = users;
      },
      error: (err) => this.handleError(err),
      complete: () => {
        this.isLoading = false;
      }
    });
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
