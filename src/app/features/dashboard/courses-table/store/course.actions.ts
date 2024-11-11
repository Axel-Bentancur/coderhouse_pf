import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICourse } from '../../../../core/models';

export const CourseActions = createActionGroup({
  source: 'Course',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: ICourse[] }>(),
    'Load Courses Failure': props<{ error: Error }>(),

    'Create Course': props<{ course: ICourse }>(),
    'Create Course Success': props<{ updatedCourses: ICourse[] }>(),
    'Create Course Failure': props<{ error: Error }>(),

    'Update Course': props<{ id: string; update: Partial<ICourse> }>(),
    'Update Course Success': props<{ updatedCourses: ICourse[] }>(),
    'Update Course Failure': props<{ error: Error }>(),

    'Delete Course': props<{ id: string }>(),
    'Delete Course Success': props<{ updatedCourses: ICourse[] }>(),
    'Delete Course Failure': props<{ error: Error }>(),
  }
});
