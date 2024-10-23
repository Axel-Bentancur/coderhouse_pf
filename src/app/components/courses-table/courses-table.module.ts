import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { CoursesTableComponent } from './courses-table.component';

//SHARED
import { SharedModule } from '../../shared/shared.module';

// MODULES
import { ModalModule } from '../modal/modal.module';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    CoursesTableComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    ModalModule,

    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CoursesTableComponent,
  ]
})
export class CoursesTableModule { }
