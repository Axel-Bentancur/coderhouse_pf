import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { IUser } from '../../../../core/models/index';

export const userFeatureKey = 'user';

export interface State {
  userList: IUser[],
  isLoading: boolean,
}

export const initialState: State = {
  userList: [],
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  // LOAD
  on(UserActions.loadUsers, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UserActions.loadUsersSuccess, (state, { data }) => ({
    ...state,
    userList: data,
    isLoading: false,
    error: null,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // CREATE
  on(UserActions.createUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UserActions.createUserSuccess, (state, { updatedUsers }) => ({
    ...state,
    userList: updatedUsers,
    isLoading: false,
    error: null,
  })),
  on(UserActions.createUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // UPDATE
  on(UserActions.updateUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UserActions.updateUserSuccess, (state, { updatedUsers }) => ({
    ...state,
    userList: updatedUsers,
    isLoading: false,
    error: null,
  })),
  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // DELETE
  on(UserActions.deleteUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UserActions.deleteUserSuccess, (state, { updatedUsers }) => ({
    ...state,
    userList: updatedUsers,
    isLoading: false,
    error: null,
  })),
  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});

