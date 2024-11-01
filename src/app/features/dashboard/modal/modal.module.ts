import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ModalComponent } from './modal.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { FormEditStudentModule } from '../forms/form-edit-student/form-edit-student.module';
import { FormEditCourseModule } from '../forms/form-edit-course/form-edit-course.module';
import { FormAddCourseModule } from '../forms/form-add-course/form-add-course.module';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SharedModule,

    FormEditStudentModule,
    FormEditCourseModule,
    FormAddCourseModule,
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
