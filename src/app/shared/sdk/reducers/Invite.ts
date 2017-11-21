/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Invite, InviteInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { InviteActionTypes } from '../actions';

export interface InvitesState extends EntityState<Invite | InviteInterface> {};

export const InviteAdapter: EntityAdapter<Invite | InviteInterface> = createEntityAdapter<Invite | InviteInterface>();

const initialState: InvitesState = InviteAdapter.getInitialState({});

const cases = BaseReducerFactory<InvitesState, Invite | InviteInterface>(InviteActionTypes, InviteAdapter);

/**
 * @module InvitesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Invite reducer.
 */
export function InvitesReducer(state = initialState, action: LoopbackAction): InvitesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getInvitesState = (state: any) => state.Invites;
export const getInvitesEntities = (state: any) => state.Invites.entities;
export const getInvitesIds = (state: any) => state.Invites.ids;

export const getInvites =
  createSelector(getInvitesEntities, getInvitesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getInviteById(id: string) {
  return (state: any) => state.Invites.entities[id];
}

export function getInvitesById(ids: string[]) {
  return createSelector(getInvitesEntities, (entities) => ids.map((id) => entities[id]));
}
