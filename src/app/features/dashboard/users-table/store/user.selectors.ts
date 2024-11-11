import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(selectUserState, (state) => state.userList);

export const selectIsLoading = createSelector(selectUserState, (state) => state.isLoading);
