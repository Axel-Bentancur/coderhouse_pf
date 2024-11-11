import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';

import { StudentActions } from './student.actions';
import { Action } from '@ngrx/store';
import { StudentsService } from '../../../../core/services/students.service';
import { of } from 'rxjs';
import { IStudent } from '../../../../core/models';

@Injectable()
export class StudentEffects {

  loadStudents$: Actions<Action<string>>;
  createStudent$: Actions<Action<string>>;
  updateStudent$: Actions<Action<string>>;
  deleteStudent$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {
    this.loadStudents$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StudentActions.loadStudents),
        mergeMap(() =>
          this.studentsService.getStudents().pipe(
            map((res) => StudentActions.loadStudentsSuccess({ data: res })),
            catchError((error) => of(StudentActions.loadStudentsFailure({ error })))
        ))
      )
    });
    this.createStudent$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StudentActions.createStudent),
        mergeMap(({ student }) =>
          this.studentsService.createStudent(student).pipe(
            map((updatedStudents: IStudent[]) =>
              StudentActions.createStudentSuccess({ updatedStudents })
            ),
            catchError((error) => of(StudentActions.createStudentFailure({ error })))
          )
        )
      );
    });
    this.updateStudent$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StudentActions.updateStudent),
        mergeMap(({ id, update }) =>
          this.studentsService.updateStudents(id, update).pipe(
            map((updatedStudents: IStudent[]) => StudentActions.updateStudentSuccess({ updatedStudents })),
            catchError((error) => of(StudentActions.updateStudentFailure({ error })))
          )
        )
      );
    });
    this.deleteStudent$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(StudentActions.deleteStudent),
        mergeMap(({ id }) =>
          this.studentsService.deleteStudent(id).pipe(
            map((updatedStudents: IStudent[]) => StudentActions.deleteStudentSuccess({ updatedStudents })),
            catchError((error) => of(StudentActions.deleteStudentFailure({ error })))
          )
        )
      );
    });
  }
}
