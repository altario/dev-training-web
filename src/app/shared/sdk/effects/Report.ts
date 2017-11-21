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
import { ReportActionTypes, ReportActions } from '../actions/Report';
import { LoopbackErrorActions } from '../actions/error';
import { ReportApi } from '../services/index';

@Injectable()
export class ReportEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(ReportActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new ReportActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getPost$ = this.actions$
    .ofType(ReportActionTypes.GET_POST).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getPost(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Post', 'findSuccess'),
            of(new ReportActions.getPostSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getPostFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReply$ = this.actions$
    .ofType(ReportActionTypes.GET_REPLY).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getReply(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Reply', 'findSuccess'),
            of(new ReportActions.getReplySuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getReplyFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReview$ = this.actions$
    .ofType(ReportActionTypes.GET_REVIEW).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getReview(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new ReportActions.getReviewSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getReviewFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getProduct$ = this.actions$
    .ofType(ReportActionTypes.GET_PRODUCT).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getProduct(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
            of(new ReportActions.getProductSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getProductFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getSubscription$ = this.actions$
    .ofType(ReportActionTypes.GET_SUBSCRIPTION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.report.getSubscription(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Subscription', 'findSuccess'),
            of(new ReportActions.getSubscriptionSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReportActions.getSubscriptionFail(error, action.meta)),
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
    @Inject(ReportApi) public report: ReportApi
  ) {
    super(actions$, report, 'Report', ReportActionTypes, ReportActions);
  }
}
