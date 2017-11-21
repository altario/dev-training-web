/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { ProductCategory, ProductCategoryInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ProductCategoryActionTypes } from '../actions';

export interface ProductCategorysState extends EntityState<ProductCategory | ProductCategoryInterface> {};

export const ProductCategoryAdapter: EntityAdapter<ProductCategory | ProductCategoryInterface> = createEntityAdapter<ProductCategory | ProductCategoryInterface>();

const initialState: ProductCategorysState = ProductCategoryAdapter.getInitialState({});

const cases = BaseReducerFactory<ProductCategorysState, ProductCategory | ProductCategoryInterface>(ProductCategoryActionTypes, ProductCategoryAdapter);

/**
 * @module ProductCategorysReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible ProductCategory reducer.
 */
export function ProductCategorysReducer(state = initialState, action: LoopbackAction): ProductCategorysState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getProductCategorysState = (state: any) => state.ProductCategorys;
export const getProductCategorysEntities = (state: any) => state.ProductCategorys.entities;
export const getProductCategorysIds = (state: any) => state.ProductCategorys.ids;

export const getProductCategorys =
  createSelector(getProductCategorysEntities, getProductCategorysIds, (entities, ids) => ids.map((id) => entities[id]));

export function getProductCategoryById(id: string) {
  return (state: any) => state.ProductCategorys.entities[id];
}

export function getProductCategorysById(ids: string[]) {
  return createSelector(getProductCategorysEntities, (entities) => ids.map((id) => entities[id]));
}
