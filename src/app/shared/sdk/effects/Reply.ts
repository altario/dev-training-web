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
import { ReplyActionTypes, ReplyActions } from '../actions/Reply';
import { LoopbackErrorActions } from '../actions/error';
import { ReplyApi } from '../services/index';

@Injectable()
export class ReplyEffects extends BaseLoopbackEffects {
  @Effect()
  public getReply$ = this.actions$
    .ofType(ReplyActionTypes.GET_REPLY).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.getReply(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new ReplyActions.getReplySuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.getReplyFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReplying$ = this.actions$
    .ofType(ReplyActionTypes.GET_REPLYING).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.getReplying(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new ReplyActions.getReplyingSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.getReplyingFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReports$ = this.actions$
    .ofType(ReplyActionTypes.FIND_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.findByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ReplyActions.findByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.findByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReports$ = this.actions$
    .ofType(ReplyActionTypes.DESTROY_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.destroyByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'deleteByIdSuccess'),
            of(new ReplyActions.destroyByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.destroyByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReports$ = this.actions$
    .ofType(ReplyActionTypes.UPDATE_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.updateByIdReports(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ReplyActions.updateByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.updateByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReports$ = this.actions$
    .ofType(ReplyActionTypes.GET_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.getReports(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReplyActions.getReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.getReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReports$ = this.actions$
    .ofType(ReplyActionTypes.CREATE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.createReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReplyActions.createReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.createReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReports$ = this.actions$
    .ofType(ReplyActionTypes.DELETE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.deleteReports(action.payload.id).pipe(
          map((response: any) => new ReplyActions.deleteReportsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new ReplyActions.deleteReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReports$ = this.actions$
    .ofType(ReplyActionTypes.CREATE_MANY_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.reply.createManyReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReplyActions.createManyReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReplyActions.createManyReportsFail(error, action.meta)),
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
    @Inject(ReplyApi) public reply: ReplyApi
  ) {
    super(actions$, reply, 'Reply', ReplyActionTypes, ReplyActions);
  }
}
