import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { StudentTableComponent } from './student-table.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal/modal.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';



@NgModule({
  declarations: [
    StudentTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    ModalModule,

    StoreModule.forFeature(studentFeature),
    EffectsModule.forFeature([StudentEffects]),
  ],
  exports: [ StudentTableComponent ]
})
export class StudentTableModule { }
