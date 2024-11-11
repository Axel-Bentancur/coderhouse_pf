import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IStudent } from '../../../../core/models';

export const StudentActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: IStudent[] }>(),
    'Load Students Failure': props<{ error: Error }>(),

    'Create Student': props<{ student: IStudent }>(),
    'Create Student Success': props<{ updatedStudents: IStudent[] }>(),
    'Create Student Failure': props<{ error: Error }>(),

    'Update Student': props<{ id: string; update: Partial<IStudent> }>(),
    'Update Student Success': props<{ updatedStudents: IStudent[] }>(),
    'Update Student Failure': props<{ error: Error }>(),

    'Delete Student': props<{ id: string }>(),
    'Delete Student Success': props<{ updatedStudents: IStudent[] }>(),
    'Delete Student Failure': props<{ error: Error }>(),
  }
});
