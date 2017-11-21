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
import { ReviewActionTypes, ReviewActions } from '../actions/Review';
import { LoopbackErrorActions } from '../actions/error';
import { ReviewApi } from '../services/index';

@Injectable()
export class ReviewEffects extends BaseLoopbackEffects {
  @Effect()
  public getUser$ = this.actions$
    .ofType(ReviewActionTypes.GET_USER).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.getUser(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'User', 'findSuccess'),
            of(new ReviewActions.getUserSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.getUserFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReports$ = this.actions$
    .ofType(ReviewActionTypes.FIND_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.findByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ReviewActions.findByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.findByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReports$ = this.actions$
    .ofType(ReviewActionTypes.DESTROY_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.destroyByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'deleteByIdSuccess'),
            of(new ReviewActions.destroyByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.destroyByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReports$ = this.actions$
    .ofType(ReviewActionTypes.UPDATE_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.updateByIdReports(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ReviewActions.updateByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.updateByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getProduct$ = this.actions$
    .ofType(ReviewActionTypes.GET_PRODUCT).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.getProduct(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
            of(new ReviewActions.getProductSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.getProductFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReports$ = this.actions$
    .ofType(ReviewActionTypes.GET_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.getReports(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReviewActions.getReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.getReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReports$ = this.actions$
    .ofType(ReviewActionTypes.CREATE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.createReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReviewActions.createReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.createReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReports$ = this.actions$
    .ofType(ReviewActionTypes.DELETE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.deleteReports(action.payload.id).pipe(
          map((response: any) => new ReviewActions.deleteReportsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new ReviewActions.deleteReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReports$ = this.actions$
    .ofType(ReviewActionTypes.CREATE_MANY_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.review.createManyReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ReviewActions.createManyReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ReviewActions.createManyReportsFail(error, action.meta)),
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
    @Inject(ReviewApi) public review: ReviewApi
  ) {
    super(actions$, review, 'Review', ReviewActionTypes, ReviewActions);
  }
}
