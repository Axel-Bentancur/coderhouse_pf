import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourse from './course.reducer';

export const selectCourseState = createFeatureSelector<fromCourse.State>(
  fromCourse.courseFeatureKey
);

export const selectCourses = createSelector(selectCourseState, (state) => state.courseList);

export const selectIsLoading = createSelector(selectCourseState, (state) => state.isLoading);
