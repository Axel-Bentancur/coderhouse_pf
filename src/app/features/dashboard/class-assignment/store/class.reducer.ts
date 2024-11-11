import { createFeature, createReducer, on } from '@ngrx/store';
import { ClassActions } from './class.actions';
import { ICourse } from '../../../../core/models';

export const classFeatureKey = 'class';

export interface State {
  classesList: ICourse[],
  isLoading: boolean,
}

export const initialState: State = {
  classesList: [],
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  // LOAD
  on(ClassActions.loadClasses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(ClassActions.loadClassesSuccess, (state, { data }) => ({
    ...state,
    classesList: data,
    isLoading: false,
    error: null,
  })),
  on(ClassActions.loadClassesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // UPDATE
  on(ClassActions.updateClass, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(ClassActions.updateClassSuccess, (state, { updatedClasses }) => ({
    ...state,
    classesList: updatedClasses,
    isLoading: false,
    error: null,
  })),
  on(ClassActions.updateClassFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // DELETE
  on(ClassActions.deleteClass, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(ClassActions.deleteClassSuccess, (state, { updatedClasses }) => ({
    ...state,
    classesList: updatedClasses,
    isLoading: false,
    error: null,
  })),
  on(ClassActions.deleteClassFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
);

export const classFeature = createFeature({
  name: classFeatureKey,
  reducer,
});

