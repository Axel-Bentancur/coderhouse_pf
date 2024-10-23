import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { StudentTableComponent } from './student-table.component';

// MODULES
import { ModalModule } from '../modal/modal.module';

//SHARED
import { SharedModule } from '../../shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    StudentTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    SharedModule,
    ModalModule,

    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [ StudentTableComponent ]
})
export class StudentTableModule { }
