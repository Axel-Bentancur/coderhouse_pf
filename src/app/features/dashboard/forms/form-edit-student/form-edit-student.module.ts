import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FormEditStudentComponent } from './form-edit-student.component';

// MODULES
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [FormEditStudentComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [FormEditStudentComponent]
})
export class FormEditStudentModule { }
