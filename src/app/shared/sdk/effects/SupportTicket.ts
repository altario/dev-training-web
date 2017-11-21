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
import { SupportTicketActionTypes, SupportTicketActions } from '../actions/SupportTicket';
import { LoopbackErrorActions } from '../actions/error';
import { SupportTicketApi } from '../services/index';

@Injectable()
export class SupportTicketEffects extends BaseLoopbackEffects {
  @Effect()
  public getOrganization$ = this.actions$
    .ofType(SupportTicketActionTypes.GET_ORGANIZATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.supportticket.getOrganization(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new SupportTicketActions.getOrganizationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new SupportTicketActions.getOrganizationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getUser$ = this.actions$
    .ofType(SupportTicketActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.supportticket.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new SupportTicketActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new SupportTicketActions.getUserFail(error, action.meta)),
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
    @Inject(SupportTicketApi) public supportticket: SupportTicketApi
  ) {
    super(actions$, supportticket, 'SupportTicket', SupportTicketActionTypes, SupportTicketActions);
  }
}
