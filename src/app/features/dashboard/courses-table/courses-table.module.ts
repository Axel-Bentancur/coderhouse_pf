import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { CoursesTableComponent } from './courses-table.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { ModalModule } from '../modal/modal.module';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/course.effects';
import { StoreModule } from '@ngrx/store';
import { courseFeature } from './store/course.reducer';



@NgModule({
  declarations: [
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ModalModule,

    StoreModule.forFeature(courseFeature),
    EffectsModule.forFeature([CourseEffects]),
  ],
  exports: [
    CoursesTableComponent,
  ]
})
export class CoursesTableModule { }
