/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { UserProduct, UserProductInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { UserProductActionTypes } from '../actions';

export interface UserProductsState extends EntityState<UserProduct | UserProductInterface> {};

export const UserProductAdapter: EntityAdapter<UserProduct | UserProductInterface> = createEntityAdapter<UserProduct | UserProductInterface>();

const initialState: UserProductsState = UserProductAdapter.getInitialState({});

const cases = BaseReducerFactory<UserProductsState, UserProduct | UserProductInterface>(UserProductActionTypes, UserProductAdapter);

/**
 * @module UserProductsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible UserProduct reducer.
 */
export function UserProductsReducer(state = initialState, action: LoopbackAction): UserProductsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getUserProductsState = (state: any) => state.UserProducts;
export const getUserProductsEntities = (state: any) => state.UserProducts.entities;
export const getUserProductsIds = (state: any) => state.UserProducts.ids;

export const getUserProducts =
  createSelector(getUserProductsEntities, getUserProductsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getUserProductById(id: string) {
  return (state: any) => state.UserProducts.entities[id];
}

export function getUserProductsById(ids: string[]) {
  return createSelector(getUserProductsEntities, (entities) => ids.map((id) => entities[id]));
}
