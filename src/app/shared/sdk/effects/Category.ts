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
import { CategoryActionTypes, CategoryActions } from '../actions/Category';
import { LoopbackErrorActions } from '../actions/error';
import { CategoryApi } from '../services/index';

@Injectable()
export class CategoryEffects extends BaseLoopbackEffects {
  @Effect()
  public findByIdCategories$ = this.actions$
    .ofType(CategoryActionTypes.FIND_BY_ID_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.findByIdCategories(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Category', 'findByIdSuccess'),
            of(new CategoryActions.findByIdCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.findByIdCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public destroyByIdCategories$ = this.actions$
    .ofType(CategoryActionTypes.DESTROY_BY_ID_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.destroyByIdCategories(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'deleteByIdSuccess'),
            of(new CategoryActions.destroyByIdCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.destroyByIdCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public updateByIdCategories$ = this.actions$
    .ofType(CategoryActionTypes.UPDATE_BY_ID_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.updateByIdCategories(action.payload.id, action.payload.fk, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Category', 'findByIdSuccess'),
            of(new CategoryActions.updateByIdCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.updateByIdCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getParent$ = this.actions$
    .ofType(CategoryActionTypes.GET_PARENT).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.getParent(action.payload.id, action.payload.refresh).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'findSuccess'),
            of(new CategoryActions.getParentSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.getParentFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public findByIdProducts$ = this.actions$
    .ofType(CategoryActionTypes.FIND_BY_ID_PRODUCTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.findByIdProducts(action.payload.id, action.payload.fk).pipe(
          mergeMap((response: any) => concat(
            resolver({id: action.payload.id, data: response, meta: action.meta}, 'Product', 'findByIdSuccess'),
            of(new CategoryActions.findByIdProductsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.findByIdProductsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getCategories$ = this.actions$
    .ofType(CategoryActionTypes.GET_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.getCategories(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'findSuccess'),
            of(new CategoryActions.getCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.getCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createCategories$ = this.actions$
    .ofType(CategoryActionTypes.CREATE_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.createCategories(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'findSuccess'),
            of(new CategoryActions.createCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.createCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public deleteCategories$ = this.actions$
    .ofType(CategoryActionTypes.DELETE_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.deleteCategories(action.payload.id).pipe(
          map((response: any) => new CategoryActions.deleteCategoriesSuccess(action.payload, action.meta)),
          catchError((error: any) => concat(
            of(new CategoryActions.deleteCategoriesFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public getProducts$ = this.actions$
    .ofType(CategoryActionTypes.GET_PRODUCTS).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.getProducts(action.payload.id, action.payload.filter).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Product', 'findSuccess'),
            of(new CategoryActions.getProductsSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.getProductsFail(error, action.meta)),
            of(new LoopbackErrorActions.error(error, action.meta))
          ))
        )
      )
    );

  @Effect()
  public createManyCategories$ = this.actions$
    .ofType(CategoryActionTypes.CREATE_MANY_CATEGORIES).pipe(
      mergeMap((action: LoopbackAction) =>
        this.category.createManyCategories(action.payload.id, action.payload.data).pipe(
          mergeMap((response: any) => concat(
            resolver({data: response, meta: action.meta}, 'Category', 'findSuccess'),
            of(new CategoryActions.createManyCategoriesSuccess(action.payload.id, response, action.meta))
          )),
          catchError((error: any) => concat(
            of(new CategoryActions.createManyCategoriesFail(error, action.meta)),
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
    @Inject(CategoryApi) public category: CategoryApi
  ) {
    super(actions$, category, 'Category', CategoryActionTypes, CategoryActions);
  }
}
