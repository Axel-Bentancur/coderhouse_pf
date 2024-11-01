import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { StudentProfileComponent } from './student-profile.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StudentProfileComponent,
  ]
})
export class StudentProfileModule { }
