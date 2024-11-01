import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { CoursesTableComponent } from './courses-table.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ModalModule,
  ],
  exports: [
    CoursesTableComponent,
  ]
})
export class CoursesTableModule { }
