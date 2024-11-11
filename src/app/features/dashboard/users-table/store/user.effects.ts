import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';

import { UserActions } from './user.actions';
import { Action } from '@ngrx/store';
import { UsersService } from '../../../../core/services/users.service';
import { of } from 'rxjs';
import { IUser } from '../../../../core/models';

@Injectable()
export class UserEffects {

  loadUsers$: Actions<Action<string>>;
  createUser$: Actions<Action<string>>;
  updateUser$: Actions<Action<string>>;
  deleteUser$: Actions<Action<string>>;

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    this.loadUsers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.usersService.getUsers().pipe(
            map((res) => UserActions.loadUsersSuccess({ data: res })),
            catchError((error) => of(UserActions.loadUsersFailure({ error })))
        ))
      )
    });
    this.createUser$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.createUser),
        mergeMap(({ user }) =>
          this.usersService.createUser(user).pipe(
            map((updatedUsers: IUser[]) =>
              UserActions.createUserSuccess({ updatedUsers })
            ),
            catchError((error) => of(UserActions.createUserFailure({ error })))
          )
        )
      );
    });
    this.updateUser$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.updateUser),
        mergeMap(({ id, update }) =>
          this.usersService.updateUsers(id, update).pipe(
            map((updatedUsers: IUser[]) => UserActions.updateUserSuccess({ updatedUsers })),
            catchError((error) => of(UserActions.updateUserFailure({ error })))
          )
        )
      );
    });
    this.deleteUser$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.deleteUser),
        mergeMap(({ id }) =>
          this.usersService.deleteUser(id).pipe(
            map((updatedUsers: IUser[]) => UserActions.deleteUserSuccess({ updatedUsers })),
            catchError((error) => of(UserActions.deleteUserFailure({ error })))
          )
        )
      );
    });
  }
}
