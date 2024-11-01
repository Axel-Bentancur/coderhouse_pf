import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ClassAssignmentComponent } from './class-assignment.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ClassAssignmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ClassAssignmentComponent
  ]
})
export class ClassAssignmentModule { }
