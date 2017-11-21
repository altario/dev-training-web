/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Vote, VoteInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { VoteActionTypes } from '../actions';

export interface VotesState extends EntityState<Vote | VoteInterface> {};

export const VoteAdapter: EntityAdapter<Vote | VoteInterface> = createEntityAdapter<Vote | VoteInterface>();

const initialState: VotesState = VoteAdapter.getInitialState({});

const cases = BaseReducerFactory<VotesState, Vote | VoteInterface>(VoteActionTypes, VoteAdapter);

/**
 * @module VotesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Vote reducer.
 */
export function VotesReducer(state = initialState, action: LoopbackAction): VotesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getVotesState = (state: any) => state.Votes;
export const getVotesEntities = (state: any) => state.Votes.entities;
export const getVotesIds = (state: any) => state.Votes.ids;

export const getVotes =
  createSelector(getVotesEntities, getVotesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getVoteById(id: string) {
  return (state: any) => state.Votes.entities[id];
}

export function getVotesById(ids: string[]) {
  return createSelector(getVotesEntities, (entities) => ids.map((id) => entities[id]));
}
