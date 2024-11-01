import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FormAddCourseComponent } from './form-add-course.component';

// MODULES
import { SharedModule } from '../../../../shared/shared.module';




@NgModule({
  declarations: [
    FormAddCourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FormAddCourseComponent
  ]
})
export class FormAddCourseModule { }
