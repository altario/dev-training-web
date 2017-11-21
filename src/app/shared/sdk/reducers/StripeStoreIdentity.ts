/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { StripeStoreIdentity, StripeStoreIdentityInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { StripeStoreIdentityActionTypes } from '../actions';

export interface StripeStoreIdentitysState extends EntityState<StripeStoreIdentity | StripeStoreIdentityInterface> {};

export const StripeStoreIdentityAdapter: EntityAdapter<StripeStoreIdentity | StripeStoreIdentityInterface> = createEntityAdapter<StripeStoreIdentity | StripeStoreIdentityInterface>();

const initialState: StripeStoreIdentitysState = StripeStoreIdentityAdapter.getInitialState({});

const cases = BaseReducerFactory<StripeStoreIdentitysState, StripeStoreIdentity | StripeStoreIdentityInterface>(StripeStoreIdentityActionTypes, StripeStoreIdentityAdapter);

/**
 * @module StripeStoreIdentitysReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible StripeStoreIdentity reducer.
 */
export function StripeStoreIdentitysReducer(state = initialState, action: LoopbackAction): StripeStoreIdentitysState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getStripeStoreIdentitysState = (state: any) => state.StripeStoreIdentitys;
export const getStripeStoreIdentitysEntities = (state: any) => state.StripeStoreIdentitys.entities;
export const getStripeStoreIdentitysIds = (state: any) => state.StripeStoreIdentitys.ids;

export const getStripeStoreIdentitys =
  createSelector(getStripeStoreIdentitysEntities, getStripeStoreIdentitysIds, (entities, ids) => ids.map((id) => entities[id]));

export function getStripeStoreIdentityById(id: string) {
  return (state: any) => state.StripeStoreIdentitys.entities[id];
}

export function getStripeStoreIdentitysById(ids: string[]) {
  return createSelector(getStripeStoreIdentitysEntities, (entities) => ids.map((id) => entities[id]));
}
