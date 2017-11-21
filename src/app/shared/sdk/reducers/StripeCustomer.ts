/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { StripeCustomer, StripeCustomerInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { StripeCustomerActionTypes } from '../actions';

export interface StripeCustomersState extends EntityState<StripeCustomer | StripeCustomerInterface> {};

export const StripeCustomerAdapter: EntityAdapter<StripeCustomer | StripeCustomerInterface> = createEntityAdapter<StripeCustomer | StripeCustomerInterface>();

const initialState: StripeCustomersState = StripeCustomerAdapter.getInitialState({});

const cases = BaseReducerFactory<StripeCustomersState, StripeCustomer | StripeCustomerInterface>(StripeCustomerActionTypes, StripeCustomerAdapter);

/**
 * @module StripeCustomersReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible StripeCustomer reducer.
 */
export function StripeCustomersReducer(state = initialState, action: LoopbackAction): StripeCustomersState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getStripeCustomersState = (state: any) => state.StripeCustomers;
export const getStripeCustomersEntities = (state: any) => state.StripeCustomers.entities;
export const getStripeCustomersIds = (state: any) => state.StripeCustomers.ids;

export const getStripeCustomers =
  createSelector(getStripeCustomersEntities, getStripeCustomersIds, (entities, ids) => ids.map((id) => entities[id]));

export function getStripeCustomerById(id: string) {
  return (state: any) => state.StripeCustomers.entities[id];
}

export function getStripeCustomersById(ids: string[]) {
  return createSelector(getStripeCustomersEntities, (entities) => ids.map((id) => entities[id]));
}
