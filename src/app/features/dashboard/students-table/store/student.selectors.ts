import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.State>(
  fromStudent.studentFeatureKey
);

export const selectStudents = createSelector(selectStudentState, (state) => state.studentList);

export const selectIsLoading = createSelector(selectStudentState, (state) => state.isLoading);
