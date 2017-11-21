/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Subscription, SubscriptionInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { SubscriptionActionTypes } from '../actions';

export interface SubscriptionsState extends EntityState<Subscription | SubscriptionInterface> {};

export const SubscriptionAdapter: EntityAdapter<Subscription | SubscriptionInterface> = createEntityAdapter<Subscription | SubscriptionInterface>();

const initialState: SubscriptionsState = SubscriptionAdapter.getInitialState({});

const cases = BaseReducerFactory<SubscriptionsState, Subscription | SubscriptionInterface>(SubscriptionActionTypes, SubscriptionAdapter);

/**
 * @module SubscriptionsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Subscription reducer.
 */
export function SubscriptionsReducer(state = initialState, action: LoopbackAction): SubscriptionsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getSubscriptionsState = (state: any) => state.Subscriptions;
export const getSubscriptionsEntities = (state: any) => state.Subscriptions.entities;
export const getSubscriptionsIds = (state: any) => state.Subscriptions.ids;

export const getSubscriptions =
  createSelector(getSubscriptionsEntities, getSubscriptionsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getSubscriptionById(id: string) {
  return (state: any) => state.Subscriptions.entities[id];
}

export function getSubscriptionsById(ids: string[]) {
  return createSelector(getSubscriptionsEntities, (entities) => ids.map((id) => entities[id]));
}
