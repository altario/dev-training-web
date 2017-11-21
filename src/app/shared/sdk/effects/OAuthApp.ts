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
import { OAuthAppActionTypes, OAuthAppActions } from '../actions/OAuthApp';
import { LoopbackErrorActions } from '../actions/error';
import { OAuthAppApi } from '../services/index';

@Injectable()
export class OAuthAppEffects extends BaseLoopbackEffects {
  @Effect()
  public keysReset$ = this.actions$
    .ofType(OAuthAppActionTypes.KEYS_RESET).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.keysReset(action.payload.id).pipe(
          map((response: any) => new OAuthAppActions.keysResetSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.keysResetFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getUser$ = this.actions$
    .ofType(OAuthAppActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new OAuthAppActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new OAuthAppActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getOrganization$ = this.actions$
    .ofType(OAuthAppActionTypes.GET_ORGANIZATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.getOrganization(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new OAuthAppActions.getOrganizationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new OAuthAppActions.getOrganizationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getS3Logo$ = this.actions$
    .ofType(OAuthAppActionTypes.GET_S3LOGO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.getS3Logo(action.payload.id, action.payload.refresh).pipe(
          map((response: any) => new OAuthAppActions.getS3LogoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.getS3LogoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createS3Logo$ = this.actions$
    .ofType(OAuthAppActionTypes.CREATE_S3LOGO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.createS3Logo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new OAuthAppActions.createS3LogoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.createS3LogoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateS3Logo$ = this.actions$
    .ofType(OAuthAppActionTypes.UPDATE_S3LOGO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.updateS3Logo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new OAuthAppActions.updateS3LogoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.updateS3LogoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyS3Logo$ = this.actions$
    .ofType(OAuthAppActionTypes.DESTROY_S3LOGO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.destroyS3Logo(action.payload.id).pipe(
          map((response: any) => new OAuthAppActions.destroyS3LogoSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.destroyS3LogoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(OAuthAppActionTypes.S3_P_U_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options).pipe(
          map((response: any) => new OAuthAppActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.s3PUTSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(OAuthAppActionTypes.S3_G_E_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.s3GETSignedUrl(action.payload.id, action.payload.key).pipe(
          map((response: any) => new OAuthAppActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.s3GETSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyS3Logo$ = this.actions$
    .ofType(OAuthAppActionTypes.CREATE_MANY_S3LOGO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.oauthapp.createManyS3Logo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new OAuthAppActions.createManyS3LogoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new OAuthAppActions.createManyS3LogoFail(error, action.meta)),
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
    @Inject(OAuthAppApi) public oauthapp: OAuthAppApi
  ) {
    super(actions$, oauthapp, 'OAuthApp', OAuthAppActionTypes, OAuthAppActions);
  }
}
