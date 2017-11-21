/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { Report, ReportInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { ReportActionTypes } from '../actions';

export interface ReportsState extends EntityState<Report | ReportInterface> {};

export const ReportAdapter: EntityAdapter<Report | ReportInterface> = createEntityAdapter<Report | ReportInterface>();

const initialState: ReportsState = ReportAdapter.getInitialState({});

const cases = BaseReducerFactory<ReportsState, Report | ReportInterface>(ReportActionTypes, ReportAdapter);

/**
 * @module ReportsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible Report reducer.
 */
export function ReportsReducer(state = initialState, action: LoopbackAction): ReportsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getReportsState = (state: any) => state.Reports;
export const getReportsEntities = (state: any) => state.Reports.entities;
export const getReportsIds = (state: any) => state.Reports.ids;

export const getReports =
  createSelector(getReportsEntities, getReportsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getReportById(id: string) {
  return (state: any) => state.Reports.entities[id];
}

export function getReportsById(ids: string[]) {
  return createSelector(getReportsEntities, (entities) => ids.map((id) => entities[id]));
}
