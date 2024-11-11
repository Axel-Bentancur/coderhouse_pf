import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../../../core/models';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: IUser[] }>(),
    'Load Users Failure': props<{ error: Error }>(),

    'Create User': props<{ user: IUser }>(),
    'Create User Success': props<{ updatedUsers: IUser[] }>(),
    'Create User Failure': props<{ error: Error }>(),

    'Update User': props<{ id: string; update: Partial<IUser> }>(),
    'Update User Success': props<{ updatedUsers: IUser[] }>(),
    'Update User Failure': props<{ error: Error }>(),

    'Delete User': props<{ id: string }>(),
    'Delete User Success': props<{ updatedUsers: IUser[] }>(),
    'Delete User Failure': props<{ error: Error }>(),
  }
});
