import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../../core/models/index';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Set Authenticated User': props<{ user: IUser }>(),
    'Unset Authenticated User': emptyProps(),
  }
});
