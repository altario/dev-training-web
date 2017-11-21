/* tslint:disable */
import { map, catchError, startWith, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { LoopbackAuthActionTypes, LoopbackAuthActions } from '../actions/auth';
import { LoopbackErrorActions } from '../actions/error';
import { LoopBackAuth } from '../services/core/auth.service';
import { UserApi } from '../services/index';


/**
 * @module LoopbackAuthEffects
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible authentication effects.
 */
@Injectable()
export class LoopbackAuthEffects {
  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect()
  public loadToken$ = this.actions$
    .ofType(LoopbackAuthActionTypes.LOAD_TOKEN)
    .pipe(
      startWith(new LoopbackAuthActions.loadToken()),
      map(() => new LoopbackAuthActions.loadTokenSuccess(this.auth.getToken()))
    );

  @Effect()
  public setToken$ = this.actions$
    .ofType(LoopbackAuthActionTypes.SET_TOKEN)
    .pipe(
      map((action: LoopbackAction) => {
        this.auth.setToken(action.payload);
        this.auth.setRememberMe(true);
        this.auth.save();

        return new LoopbackAuthActions.setTokenSuccess(action.payload, action.meta);
      })
    );

  @Effect()
  public setUser$ = this.actions$
    .ofType(LoopbackAuthActionTypes.SET_USER)
    .pipe(
      map((action: LoopbackAction) => {
        this.auth.setToken(Object.assign({}, this.auth.getToken(), {
          userId: action.payload.id,
          user: action.payload
        }));
        this.auth.setRememberMe(true);
        this.auth.save();

        return new LoopbackAuthActions.setUserSuccess(action.payload, action.meta);
      })
    );

  @Effect()
  public updateUserProperties$ = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_PROPERTIES)
    .pipe(
      mergeMap((action: LoopbackAction) => {
        const token = this.auth.getToken();
        return this.user.patchAttributes(token.userId, action.payload)
          .pipe(
            map((response) => {
              this.auth.setToken(Object.assign({}, this.auth.getToken(), {
                userId: action.payload.id || this.auth.getCurrentUserId(),
                user: Object.assign({}, this.auth.getCurrentUserData(), action.payload)
              }));
              this.auth.save();
              return new LoopbackAuthActions.updateUserPropertiesSuccess(action.payload, action.meta);
            }),
            catchError((error) => concat(
              of(new LoopbackAuthActions.updateUserPropertiesFail(error, action.meta)),
              of(new LoopbackErrorActions.error(error, action.meta))
            ))
          );
      })
    );

  @Effect()
  public updateUserState$ = this.actions$
    .ofType(LoopbackAuthActionTypes.UPDATE_USER_STATE)
    .pipe(
      map((action: LoopbackAction) => {
        this.auth.setToken(Object.assign({}, this.auth.getToken(), {
          userId: action.payload.id || this.auth.getCurrentUserId(),
          user: Object.assign({}, this.auth.getCurrentUserData(), action.payload)
        }));
        this.auth.save();

        return new LoopbackAuthActions.updateUserStateSuccess(action.payload, action.meta);
      })
    );

  constructor(
    private actions$: Actions,
    private auth: LoopBackAuth,
    private user: UserApi
  ) {}
}
