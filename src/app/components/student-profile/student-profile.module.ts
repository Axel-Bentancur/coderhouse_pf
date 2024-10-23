import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { StudentProfileComponent } from './student-profile.component';

//SHARED
import { SharedModule } from '../../shared/shared.module';

// MODULES
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    StudentProfileComponent,
  ]
})
export class StudentProfileModule { }
