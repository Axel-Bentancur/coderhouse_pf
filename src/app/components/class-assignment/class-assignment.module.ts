import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ClassAssignmentComponent } from './class-assignment.component';

//SHARED
import { SharedModule } from '../../shared/shared.module';

// MODULES
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ClassAssignmentComponent
  ],
  imports: [
    CommonModule,

    SharedModule,

    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ClassAssignmentComponent
  ]
})
export class ClassAssignmentModule { }
