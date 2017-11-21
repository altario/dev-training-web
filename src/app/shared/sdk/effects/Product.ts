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
import { ProductActionTypes, ProductActions } from '../actions/Product';
import { LoopbackErrorActions } from '../actions/error';
import { ProductApi } from '../services/index';

@Injectable()
export class ProductEffects extends BaseLoopbackEffects {
  @Effect()
  public getOrganization$ = this.actions$
    .ofType(ProductActionTypes.GET_ORGANIZATION).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.getOrganization(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Organization', 'findSuccess'),
            of(new ProductActions.getOrganizationSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.getOrganizationFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReviews$ = this.actions$
    .ofType(ProductActionTypes.FIND_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.findByIdReviews(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Review', 'findByIdSuccess'),
            of(new ProductActions.findByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.findByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReviews$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.destroyByIdReviews(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'deleteByIdSuccess'),
            of(new ProductActions.destroyByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.destroyByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReviews$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_BY_ID_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.updateByIdReviews(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Review', 'findByIdSuccess'),
            of(new ProductActions.updateByIdReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.updateByIdReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdReports$ = this.actions$
    .ofType(ProductActionTypes.FIND_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.findByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ProductActions.findByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.findByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdReports$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.destroyByIdReports(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'deleteByIdSuccess'),
            of(new ProductActions.destroyByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.destroyByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdReports$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_BY_ID_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.updateByIdReports(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Report', 'findByIdSuccess'),
            of(new ProductActions.updateByIdReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.updateByIdReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdCategories$ = this.actions$
    .ofType(ProductActionTypes.FIND_BY_ID_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.findByIdCategories(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Category', 'findByIdSuccess'),
            of(new ProductActions.findByIdCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.findByIdCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public linkCategories$ = this.actions$
    .ofType(ProductActionTypes.LINK_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.linkCategories(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ProductCategoryActions'].createSuccess(response, action.meta)),
          of(new ProductActions.linkCategoriesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new ProductActions.linkCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public unlinkCategories$ = this.actions$
    .ofType(ProductActionTypes.UNLINK_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.unlinkCategories(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
          of(new actions['ProductCategoryActions'].deleteByIdSuccess(response.id, action.meta)),
          of(new ProductActions.unlinkCategoriesSuccess(action.payload.id, response, action.meta))
        )),
          catchError((error: any) => concat(
            of(new ProductActions.unlinkCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getS3Photo$ = this.actions$
    .ofType(ProductActionTypes.GET_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.getS3Photo(action.payload.id, action.payload.refresh).pipe(
          map((response: any) => new ProductActions.getS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.getS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createS3Photo$ = this.actions$
    .ofType(ProductActionTypes.CREATE_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new ProductActions.createS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.createS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateS3Photo$ = this.actions$
    .ofType(ProductActionTypes.UPDATE_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.updateS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new ProductActions.updateS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.updateS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyS3Photo$ = this.actions$
    .ofType(ProductActionTypes.DESTROY_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.destroyS3Photo(action.payload.id).pipe(
          map((response: any) => new ProductActions.destroyS3PhotoSuccess(action.payload.id, action.payload.fk, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.destroyS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReviews$ = this.actions$
    .ofType(ProductActionTypes.GET_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.getReviews(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new ProductActions.getReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.getReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReviews$ = this.actions$
    .ofType(ProductActionTypes.CREATE_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createReviews(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new ProductActions.createReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.createReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReviews$ = this.actions$
    .ofType(ProductActionTypes.DELETE_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.deleteReviews(action.payload.id).pipe(
          map((response: any) => new ProductActions.deleteReviewsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.deleteReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getReports$ = this.actions$
    .ofType(ProductActionTypes.GET_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.getReports(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ProductActions.getReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.getReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createReports$ = this.actions$
    .ofType(ProductActionTypes.CREATE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ProductActions.createReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.createReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteReports$ = this.actions$
    .ofType(ProductActionTypes.DELETE_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.deleteReports(action.payload.id).pipe(
          map((response: any) => new ProductActions.deleteReportsSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.deleteReportsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getCategories$ = this.actions$
    .ofType(ProductActionTypes.GET_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.getCategories(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'findSuccess'),
            of(new ProductActions.getCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.getCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3PUTSignedUrl$ = this.actions$
    .ofType(ProductActionTypes.S3_P_U_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.s3PUTSignedUrl(action.payload.id, action.payload.key, action.payload.options).pipe(
          map((response: any) => new ProductActions.s3PUTSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.s3PUTSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public s3GETSignedUrl$ = this.actions$
    .ofType(ProductActionTypes.S3_G_E_T_SIGNED_URL).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.s3GETSignedUrl(action.payload.id, action.payload.key).pipe(
          map((response: any) => new ProductActions.s3GETSignedUrlSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.s3GETSignedUrlFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyS3Photo$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_S3PHOTO).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createManyS3Photo(action.payload.id, action.payload.data).pipe(
          map((response: any) => new ProductActions.createManyS3PhotoSuccess(action.payload.id, response, action.meta)),
          catchError((error: any) => concat(
            of(new ProductActions.createManyS3PhotoFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReviews$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_REVIEWS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createManyReviews(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Review', 'findSuccess'),
            of(new ProductActions.createManyReviewsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.createManyReviewsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyReports$ = this.actions$
    .ofType(ProductActionTypes.CREATE_MANY_REPORTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.product.createManyReports(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Report', 'findSuccess'),
            of(new ProductActions.createManyReportsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new ProductActions.createManyReportsFail(error, action.meta)),
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
    @Inject(ProductApi) public product: ProductApi
  ) {
    super(actions$, product, 'Product', ProductActionTypes, ProductActions);
  }
}
