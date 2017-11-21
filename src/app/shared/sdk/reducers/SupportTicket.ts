/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { SupportTicket, SupportTicketInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { SupportTicketActionTypes } from '../actions';

export interface SupportTicketsState extends EntityState<SupportTicket | SupportTicketInterface> {};

export const SupportTicketAdapter: EntityAdapter<SupportTicket | SupportTicketInterface> = createEntityAdapter<SupportTicket | SupportTicketInterface>();

const initialState: SupportTicketsState = SupportTicketAdapter.getInitialState({});

const cases = BaseReducerFactory<SupportTicketsState, SupportTicket | SupportTicketInterface>(SupportTicketActionTypes, SupportTicketAdapter);

/**
 * @module SupportTicketsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible SupportTicket reducer.
 */
export function SupportTicketsReducer(state = initialState, action: LoopbackAction): SupportTicketsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getSupportTicketsState = (state: any) => state.SupportTickets;
export const getSupportTicketsEntities = (state: any) => state.SupportTickets.entities;
export const getSupportTicketsIds = (state: any) => state.SupportTickets.ids;

export const getSupportTickets =
  createSelector(getSupportTicketsEntities, getSupportTicketsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getSupportTicketById(id: string) {
  return (state: any) => state.SupportTickets.entities[id];
}

export function getSupportTicketsById(ids: string[]) {
  return createSelector(getSupportTicketsEntities, (entities) => ids.map((id) => entities[id]));
}
