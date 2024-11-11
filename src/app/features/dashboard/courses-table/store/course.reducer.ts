import { createFeature, createReducer, on } from '@ngrx/store';
import { CourseActions } from './course.actions';
import { ICourse } from '../../../../core/models';

export const courseFeatureKey = 'course';

export interface State {
  courseList: ICourse[],
  isLoading: boolean,
}

export const initialState: State = {
  courseList: [],
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  // LOAD
  on(CourseActions.loadCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadCoursesSuccess, (state, { data }) => ({
    ...state,
    courseList: data,
    isLoading: false,
    error: null,
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // CREATE
  on(CourseActions.createCourse, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.createCourseSuccess, (state, { updatedCourses }) => ({
    ...state,
    courseList: updatedCourses,
    isLoading: false,
    error: null,
  })),
  on(CourseActions.createCourseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // UPDATE
  on(CourseActions.updateCourse, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.updateCourseSuccess, (state, { updatedCourses }) => ({
    ...state,
    courseList: updatedCourses,
    isLoading: false,
    error: null,
  })),
  on(CourseActions.updateCourseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // DELETE
  on(CourseActions.deleteCourse, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.deleteCourseSuccess, (state, { updatedCourses }) => ({
    ...state,
    courseList: updatedCourses,
    isLoading: false,
    error: null,
  })),
  on(CourseActions.deleteCourseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))

);

export const courseFeature = createFeature({
  name: courseFeatureKey,
  reducer,
});

