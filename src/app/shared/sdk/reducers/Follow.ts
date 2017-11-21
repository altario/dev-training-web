/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Follow, FollowInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { FollowActionTypes } from '../actions';

export interface FollowsState extends EntityState<Follow | FollowInterface> {};

export const FollowAdapter: EntityAdapter<Follow | FollowInterface> = createEntityAdapter<Follow | FollowInterface>();

const initialState: FollowsState = FollowAdapter.getInitialState({});

const cases = BaseReducerFactory<FollowsState, Follow | FollowInterface>(FollowActionTypes, FollowAdapter);

/**
 * @module FollowsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Follow reducer.
 */
export function FollowsReducer(state = initialState, action: LoopbackAction): FollowsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getFollowsState = (state: any) => state.Follows;
export const getFollowsEntities = (state: any) => state.Follows.entities;
export const getFollowsIds = (state: any) => state.Follows.ids;

export const getFollows =
  createSelector(getFollowsEntities, getFollowsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getFollowById(id: string) {
  return (state: any) => state.Follows.entities[id];
}

export function getFollowsById(ids: string[]) {
  return createSelector(getFollowsEntities, (entities) => ids.map((id) => entities[id]));
}
