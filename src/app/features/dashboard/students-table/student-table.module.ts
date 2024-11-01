import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { StudentTableComponent } from './student-table.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    StudentTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    ModalModule,
  ],
  exports: [ StudentTableComponent ]
})
export class StudentTableModule { }
