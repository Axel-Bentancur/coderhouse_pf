import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FormEditCourseComponent } from './form-edit-course.component';

// MODULES
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    FormEditCourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [FormEditCourseComponent]
})
export class FormEditCourseModule { }
