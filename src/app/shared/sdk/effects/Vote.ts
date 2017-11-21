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
import { VoteActionTypes, VoteActions } from '../actions/Vote';
import { LoopbackErrorActions } from '../actions/error';
import { VoteApi } from '../services/index';

@Injectable()
export class VoteEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(VoteActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.vote.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new VoteActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new VoteActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getPost$ = this.actions$
    .ofType(VoteActionTypes.GET_POST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.vote.getPost(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new VoteActions.getPostSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new VoteActions.getPostFail(error, action.meta)),
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
    @Inject(VoteApi) public vote: VoteApi
  ) {
    super(actions$, vote, 'Vote', VoteActionTypes, VoteActions);
  }
}
