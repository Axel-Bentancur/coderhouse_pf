import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { IStudent } from '../../../../core/models/index';

export const studentFeatureKey = 'student';

export interface State {
  studentList: IStudent[],
  isLoading: boolean,
}

export const initialState: State = {
  studentList: [],
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  // LOAD
  on(StudentActions.loadStudents, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(StudentActions.loadStudentsSuccess, (state, { data }) => ({
    ...state,
    studentList: data,
    isLoading: false,
    error: null,
  })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // CREATE
  on(StudentActions.createStudent, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(StudentActions.createStudentSuccess, (state, { updatedStudents }) => ({
    ...state,
    studentList: updatedStudents,
    isLoading: false,
    error: null,
  })),
  on(StudentActions.createStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // UPDATE
  on(StudentActions.updateStudent, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(StudentActions.updateStudentSuccess, (state, { updatedStudents }) => ({
    ...state,
    studentList: updatedStudents,
    isLoading: false,
    error: null,
  })),
  on(StudentActions.updateStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // DELETE
  on(StudentActions.deleteStudent, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(StudentActions.deleteStudentSuccess, (state, { updatedStudents }) => ({
    ...state,
    studentList: updatedStudents,
    isLoading: false,
    error: null,
  })),
  on(StudentActions.deleteStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});

