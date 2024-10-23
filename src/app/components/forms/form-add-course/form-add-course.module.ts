import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddCourseComponent } from './form-add-course.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    FormAddCourseComponent
  ],
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    FormAddCourseComponent
  ]
})
export class FormAddCourseModule { }
