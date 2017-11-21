/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { TwoFactorAuthentication, TwoFactorAuthenticationInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { TwoFactorAuthenticationActionTypes } from '../actions';

export interface TwoFactorAuthenticationsState extends EntityState<TwoFactorAuthentication | TwoFactorAuthenticationInterface> {};

export const TwoFactorAuthenticationAdapter: EntityAdapter<TwoFactorAuthentication | TwoFactorAuthenticationInterface> = createEntityAdapter<TwoFactorAuthentication | TwoFactorAuthenticationInterface>();

const initialState: TwoFactorAuthenticationsState = TwoFactorAuthenticationAdapter.getInitialState({});

const cases = BaseReducerFactory<TwoFactorAuthenticationsState, TwoFactorAuthentication | TwoFactorAuthenticationInterface>(TwoFactorAuthenticationActionTypes, TwoFactorAuthenticationAdapter);

/**
 * @module TwoFactorAuthenticationsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible TwoFactorAuthentication reducer.
 */
export function TwoFactorAuthenticationsReducer(state = initialState, action: LoopbackAction): TwoFactorAuthenticationsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getTwoFactorAuthenticationsState = (state: any) => state.TwoFactorAuthentications;
export const getTwoFactorAuthenticationsEntities = (state: any) => state.TwoFactorAuthentications.entities;
export const getTwoFactorAuthenticationsIds = (state: any) => state.TwoFactorAuthentications.ids;

export const getTwoFactorAuthentications =
  createSelector(getTwoFactorAuthenticationsEntities, getTwoFactorAuthenticationsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getTwoFactorAuthenticationById(id: string) {
  return (state: any) => state.TwoFactorAuthentications.entities[id];
}

export function getTwoFactorAuthenticationsById(ids: string[]) {
  return createSelector(getTwoFactorAuthenticationsEntities, (entities) => ids.map((id) => entities[id]));
}
