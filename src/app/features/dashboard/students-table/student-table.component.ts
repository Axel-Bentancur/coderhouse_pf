import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../core/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { StudentsService } from '../../../core/services/students.service';

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

  loadUsers(): void {
    this.isLoading = true;
    this.StudentsService.getStudents().subscribe({
      next: (users) => {
        this.students = users;
      },
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
      complete: () => {
        this.isLoading = false;
      }
    });
  }


  updateUsers(id: number, update: Partial<IStudent>): void {
    this.isLoading = true;
    this.StudentsService.updateStudents(id, update).subscribe({
      next: (users) => {
        this.students = users;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  deleteUsers(id: number): void {
    this.isLoading = true;
    this.StudentsService.deleteStudent(id).subscribe({
      next: (users) => {
        this.students = users;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  openDialog(action: 'Create' | 'Edit' | 'Delete', entity: string, element: IStudent | null): void {
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
