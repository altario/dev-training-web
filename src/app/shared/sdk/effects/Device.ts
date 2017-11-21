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
import { DeviceActionTypes, DeviceActions } from '../actions/Device';
import { LoopbackErrorActions } from '../actions/error';
import { DeviceApi } from '../services/index';

@Injectable()
export class DeviceEffects extends BaseLoopbackEffects {
  @Effect()
  public findByApp$ = this.actions$
    .ofType(DeviceActionTypes.FIND_BY_APP).pipe(
      mergeMap((action: LoopbackAction) =>
        this.device.findByApp(action.payload.deviceType, action.payload.appId, action.payload.appVersion).pipe(
          map((response: any) => new DeviceActions.findByAppSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new DeviceActions.findByAppFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByUser$ = this.actions$
    .ofType(DeviceActionTypes.FIND_BY_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.device.findByUser(action.payload.deviceType, action.payload.userId).pipe(
          map((response: any) => new DeviceActions.findByUserSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new DeviceActions.findByUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findBySubscriptions$ = this.actions$
    .ofType(DeviceActionTypes.FIND_BY_SUBSCRIPTIONS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.device.findBySubscriptions(action.payload.deviceType, action.payload.subscriptions).pipe(
          map((response: any) => new DeviceActions.findBySubscriptionsSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new DeviceActions.findBySubscriptionsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getUser$ = this.actions$
    .ofType(DeviceActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.device.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new DeviceActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new DeviceActions.getUserFail(error, action.meta)),
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
    @Inject(DeviceApi) public device: DeviceApi
  ) {
    super(actions$, device, 'Device', DeviceActionTypes, DeviceActions);
  }
}
