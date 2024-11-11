import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';

import { CourseActions } from './course.actions';
import { Action } from '@ngrx/store';
import { CoursesService } from '../../../../core/services/courses.service';
import { of } from 'rxjs';
import { ICourse } from '../../../../core/models';

@Injectable()
export class CourseEffects {

  loadCourses$: Actions<Action<string>>;
  createCourse$: Actions<Action<string>>;
  updateCourse$: Actions<Action<string>>;
  deleteCourse$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {
    this.loadCourses$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CourseActions.loadCourses),
        mergeMap(() =>
          this.coursesService.getCourses().pipe(
            map((res) => CourseActions.loadCoursesSuccess({ data: res })),
            catchError((error) => of(CourseActions.loadCoursesFailure({ error })))
        ))
      )
    });
    this.createCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CourseActions.createCourse),
        mergeMap(({ course }) =>
          this.coursesService.createCourse(course).pipe(
            map((updatedCourses: ICourse[]) =>
              CourseActions.createCourseSuccess({ updatedCourses })
            ),
            catchError((error) => of(CourseActions.createCourseFailure({ error })))
          )
        )
      );
    });
    this.updateCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CourseActions.updateCourse),
        mergeMap(({ id, update }) =>
          this.coursesService.updateCourse(id, update).pipe(
            map((updatedCourses: ICourse[]) => CourseActions.updateCourseSuccess({ updatedCourses })),
            catchError((error) => of(CourseActions.updateCourseFailure({ error })))
          )
        )
      );
    });
    this.deleteCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CourseActions.deleteCourse),
        mergeMap(({ id }) =>
          this.coursesService.deleteCourse(id).pipe(
            map((updatedCourses: ICourse[]) => CourseActions.deleteCourseSuccess({ updatedCourses })),
            catchError((error) => of(CourseActions.deleteCourseFailure({ error })))
          )
        )
      );
    });
  }
}
