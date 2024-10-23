import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ModalComponent } from '../modal/modal.component';

// MODULES
import { FormEditStudentModule } from '../forms/form-edit-student/form-edit-student.module';
import { FormEditCourseModule } from '../forms/form-edit-course/form-edit-course.module';
import { MatButtonModule } from '@angular/material/button';
import { FormAddCourseModule } from '../forms/form-add-course/form-add-course.module';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,

    FormEditStudentModule,
    FormEditCourseModule,
    FormAddCourseModule,
    MatButtonModule,
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
