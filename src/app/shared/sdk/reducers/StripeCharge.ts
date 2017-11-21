/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { StripeCharge, StripeChargeInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { StripeChargeActionTypes } from '../actions';

export interface StripeChargesState extends EntityState<StripeCharge | StripeChargeInterface> {};

export const StripeChargeAdapter: EntityAdapter<StripeCharge | StripeChargeInterface> = createEntityAdapter<StripeCharge | StripeChargeInterface>();

const initialState: StripeChargesState = StripeChargeAdapter.getInitialState({});

const cases = BaseReducerFactory<StripeChargesState, StripeCharge | StripeChargeInterface>(StripeChargeActionTypes, StripeChargeAdapter);

/**
 * @module StripeChargesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible StripeCharge reducer.
 */
export function StripeChargesReducer(state = initialState, action: LoopbackAction): StripeChargesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getStripeChargesState = (state: any) => state.StripeCharges;
export const getStripeChargesEntities = (state: any) => state.StripeCharges.entities;
export const getStripeChargesIds = (state: any) => state.StripeCharges.ids;

export const getStripeCharges =
  createSelector(getStripeChargesEntities, getStripeChargesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getStripeChargeById(id: string) {
  return (state: any) => state.StripeCharges.entities[id];
}

export function getStripeChargesById(ids: string[]) {
  return createSelector(getStripeChargesEntities, (entities) => ids.map((id) => entities[id]));
}
