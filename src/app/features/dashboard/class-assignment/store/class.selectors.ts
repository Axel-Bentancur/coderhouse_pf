import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClass from './class.reducer';

export const selectClassState = createFeatureSelector<fromClass.State>(
  fromClass.classFeatureKey
);

export const selectClasses = createSelector(selectClassState, (state) => state.classesList);

export const selectIsLoading = createSelector(selectClassState, (state) => state.isLoading);
