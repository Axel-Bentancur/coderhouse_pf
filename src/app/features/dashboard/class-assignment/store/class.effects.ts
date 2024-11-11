import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClassActions } from './class.actions';
import { Action } from '@ngrx/store';
import { CoursesService } from '../../../../core/services/courses.service';
import { ICourse } from '../../../../core/models';

@Injectable()
export class ClassEffects {

  loadClasses$: Actions<Action<string>>;
  updateClass$: Actions<Action<string>>;
  deleteClass$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {
    this.loadClasses$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClassActions.loadClasses),
        mergeMap(() =>
          this.coursesService.getCourses().pipe(
            map((res) => ClassActions.loadClassesSuccess({ data: res })),
            catchError((error) => of(ClassActions.loadClassesFailure({ error })))
        ))
      )
    });
    this.updateClass$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClassActions.updateClass),
        mergeMap(({ courseId, studentId }) =>
          this.coursesService.addStudentToCourse(courseId, studentId).pipe(
            map((updatedClasses: ICourse[]) => ClassActions.updateClassSuccess({ updatedClasses })),
            catchError((error) => of(ClassActions.updateClassFailure({ error })))
          )
        )
      );
    });
    this.deleteClass$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(ClassActions.deleteClass),
        mergeMap(({ courseId, studentId }) =>
          this.coursesService.deleteStudent(courseId, studentId).pipe(
            map((updatedClasses: ICourse[]) => ClassActions.deleteClassSuccess({ updatedClasses })),
            catchError((error) => of(ClassActions.deleteClassFailure({ error })))
          )
        )
      );
    });
  }
}
