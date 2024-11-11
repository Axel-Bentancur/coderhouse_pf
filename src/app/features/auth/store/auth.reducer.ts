import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { IUser } from '../../../core/models';

export const authFeatureKey = 'auth';

export interface State {
  authenticatedUser: IUser | null,
}

export const initialState: State = {
  authenticatedUser: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.setAuthenticatedUser, (state, action) => {
    return {
      ...state,
      authenticatedUser: action.user
    }
  }),

  on(AuthActions.unsetAuthenticatedUser, (state) => {
    return {
      ...state,
      authenticatedUser: null
    }
  }),
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

