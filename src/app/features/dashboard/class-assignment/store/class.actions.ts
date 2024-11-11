import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICourse } from '../../../../core/models';

export const ClassActions = createActionGroup({
  source: 'Class',
  events: {
    'Load Classes': emptyProps(),
    'Load Classes Success': props<{ data: ICourse[] }>(),
    'Load Classes Failure': props<{ error: Error }>(),

    'Update Class': props<{ courseId: string; studentId: string }>(),
    'Update Class Success': props<{ updatedClasses: ICourse[] }>(),
    'Update Class Failure': props<{ error: Error }>(),

    'Delete Class': props<{ courseId: string; studentId: string }>(),
    'Delete Class Success': props<{ updatedClasses: ICourse[] }>(),
    'Delete Class Failure': props<{ error: Error }>(),
  }
});
