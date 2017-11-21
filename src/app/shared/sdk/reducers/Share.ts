/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Share, ShareInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ShareActionTypes } from '../actions';

export interface SharesState extends EntityState<Share | ShareInterface> {};

export const ShareAdapter: EntityAdapter<Share | ShareInterface> = createEntityAdapter<Share | ShareInterface>();

const initialState: SharesState = ShareAdapter.getInitialState({});

const cases = BaseReducerFactory<SharesState, Share | ShareInterface>(ShareActionTypes, ShareAdapter);

/**
 * @module SharesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Share reducer.
 */
export function SharesReducer(state = initialState, action: LoopbackAction): SharesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getSharesState = (state: any) => state.Shares;
export const getSharesEntities = (state: any) => state.Shares.entities;
export const getSharesIds = (state: any) => state.Shares.ids;

export const getShares =
  createSelector(getSharesEntities, getSharesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getShareById(id: string) {
  return (state: any) => state.Shares.entities[id];
}

export function getSharesById(ids: string[]) {
  return createSelector(getSharesEntities, (entities) => ids.map((id) => entities[id]));
}
