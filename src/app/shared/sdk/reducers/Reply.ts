/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Reply, ReplyInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ReplyActionTypes } from '../actions';

export interface ReplysState extends EntityState<Reply | ReplyInterface> {};

export const ReplyAdapter: EntityAdapter<Reply | ReplyInterface> = createEntityAdapter<Reply | ReplyInterface>();

const initialState: ReplysState = ReplyAdapter.getInitialState({});

const cases = BaseReducerFactory<ReplysState, Reply | ReplyInterface>(ReplyActionTypes, ReplyAdapter);

/**
 * @module ReplysReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Reply reducer.
 */
export function ReplysReducer(state = initialState, action: LoopbackAction): ReplysState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getReplysState = (state: any) => state.Replys;
export const getReplysEntities = (state: any) => state.Replys.entities;
export const getReplysIds = (state: any) => state.Replys.ids;

export const getReplys =
  createSelector(getReplysEntities, getReplysIds, (entities, ids) => ids.map((id) => entities[id]));

export function getReplyById(id: string) {
  return (state: any) => state.Replys.entities[id];
}

export function getReplysById(ids: string[]) {
  return createSelector(getReplysEntities, (entities) => ids.map((id) => entities[id]));
}
