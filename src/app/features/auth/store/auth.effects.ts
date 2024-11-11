import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { AuthActions } from './auth.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {


  loadAuths$: Actions<Action<string>>;

  constructor(private actions$: Actions) {
    this.loadAuths$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(AuthActions.setAuthenticatedUser),
        concatMap(() => EMPTY as Observable<{ type: string }>)
      );
    });
  }
}
