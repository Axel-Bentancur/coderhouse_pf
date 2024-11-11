import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ClassAssignmentComponent } from './class-assignment.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ClassEffects } from './store/class.effects';
import { StoreModule } from '@ngrx/store';
import { classFeature } from './store/class.reducer';


@NgModule({
  declarations: [
    ClassAssignmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    StoreModule.forFeature(classFeature),
    EffectsModule.forFeature([ClassEffects]),
  ],
  exports: [
    ClassAssignmentComponent
  ]
})
export class ClassAssignmentModule { }
