import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonElement } from '../../models';
import { ELEMENT_DATA } from '../../mockdata';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  students: PersonElement[] = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'firstName', 'address', 'phone', 'email', 'edit', 'delete'];
  openDialog(type: string, student: PersonElement | null): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {
        type: type,
        student: student,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        if (type === 'Edit' && student) {
          this.students = this.students.map((user) =>
            user.id === student.id ? { ...user, ...result } : user
          );
        } else if (type === 'Delete' && student) {
          this.students = this.students.filter(user => user.id !== student.id);
          console.log(`Student with ID ${student.id} deleted`);
        } else {
          const newId = Math.floor(100 + Math.random() * 900);
          this.students = [
            ...this.students,
            {
              ...result,
              id: newId
            }
          ];
        }
      }
    });

  }
}
