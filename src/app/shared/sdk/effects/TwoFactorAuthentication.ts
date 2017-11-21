/* tslint:disable */
import { map, catchError, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { LoopbackAction } from '../models/BaseModels';
import { BaseLoopbackEffects } from './base';
import { resolver } from './resolver';

import * as actions from '../actions';
import { TwoFactorAuthenticationActionTypes, TwoFactorAuthenticationActions } from '../actions/TwoFactorAuthentication';
import { LoopbackErrorActions } from '../actions/error';
import { TwoFactorAuthenticationApi } from '../services/index';

@Injectable()
export class TwoFactorAuthenticationEffects extends BaseLoopbackEffects {
  @Effect()
  public verifyTwoFactorAuthentication$ = this.actions$
    .ofType(TwoFactorAuthenticationActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.twofactorauthentication.verifyTwoFactorAuthentication(action.payload.id, action.payload.token).pipe(
          map((response: any) => new TwoFactorAuthenticationActions.verifyTwoFactorAuthenticationSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new TwoFactorAuthenticationActions.verifyTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getTwoFactorAuthentication$ = this.actions$
    .ofType(TwoFactorAuthenticationActionTypes.GET_TWOFACTORAUTHENTICATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.twofactorauthentication.getTwoFactorAuthentication(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'TwoFactorAuthentication', 'findSuccess'),
            of(new TwoFactorAuthenticationActions.getTwoFactorAuthenticationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new TwoFactorAuthenticationActions.getTwoFactorAuthenticationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getUser$ = this.actions$
    .ofType(TwoFactorAuthenticationActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.twofactorauthentication.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new TwoFactorAuthenticationActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new TwoFactorAuthenticationActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

    /**
   * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
   * @description
   * Decorate base effects metadata
   */
  @Effect() public create$;
  @Effect() public createMany$;
  @Effect() public findById$;
  @Effect() public find$;
  @Effect() public findOne$;
  @Effect() public updateAll$;
  @Effect() public deleteById$;
  @Effect() public updateAttributes$;
  @Effect() public upsert$;
  @Effect() public upsertWithWhere$;
  @Effect() public replaceOrCreate$;
  @Effect() public replaceById$;
  @Effect() public patchOrCreate$;
  @Effect() public patchAttributes$;

  constructor(
    @Inject(Actions) public actions$: Actions,
    @Inject(TwoFactorAuthenticationApi) public twofactorauthentication: TwoFactorAuthenticationApi
  ) {
    super(actions$, twofactorauthentication, 'TwoFactorAuthentication', TwoFactorAuthenticationActionTypes, TwoFactorAuthenticationActions);
  }
}
