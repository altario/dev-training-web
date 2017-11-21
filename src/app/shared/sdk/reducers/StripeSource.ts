/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { StripeSource, StripeSourceInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { StripeSourceActionTypes } from '../actions';

export interface StripeSourcesState extends EntityState<StripeSource | StripeSourceInterface> {};

export const StripeSourceAdapter: EntityAdapter<StripeSource | StripeSourceInterface> = createEntityAdapter<StripeSource | StripeSourceInterface>();

const initialState: StripeSourcesState = StripeSourceAdapter.getInitialState({});

const cases = BaseReducerFactory<StripeSourcesState, StripeSource | StripeSourceInterface>(StripeSourceActionTypes, StripeSourceAdapter);

/**
 * @module StripeSourcesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible StripeSource reducer.
 */
export function StripeSourcesReducer(state = initialState, action: LoopbackAction): StripeSourcesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getStripeSourcesState = (state: any) => state.StripeSources;
export const getStripeSourcesEntities = (state: any) => state.StripeSources.entities;
export const getStripeSourcesIds = (state: any) => state.StripeSources.ids;

export const getStripeSources =
  createSelector(getStripeSourcesEntities, getStripeSourcesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getStripeSourceById(id: string) {
  return (state: any) => state.StripeSources.entities[id];
}

export function getStripeSourcesById(ids: string[]) {
  return createSelector(getStripeSourcesEntities, (entities) => ids.map((id) => entities[id]));
}
