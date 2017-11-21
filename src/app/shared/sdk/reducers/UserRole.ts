/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { UserRole, UserRoleInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { UserRoleActionTypes } from '../actions';

export interface UserRolesState extends EntityState<UserRole | UserRoleInterface> {};

export const UserRoleAdapter: EntityAdapter<UserRole | UserRoleInterface> = createEntityAdapter<UserRole | UserRoleInterface>();

const initialState: UserRolesState = UserRoleAdapter.getInitialState({});

const cases = BaseReducerFactory<UserRolesState, UserRole | UserRoleInterface>(UserRoleActionTypes, UserRoleAdapter);

/**
 * @module UserRolesReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible UserRole reducer.
 */
export function UserRolesReducer(state = initialState, action: LoopbackAction): UserRolesState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getUserRolesState = (state: any) => state.UserRoles;
export const getUserRolesEntities = (state: any) => state.UserRoles.entities;
export const getUserRolesIds = (state: any) => state.UserRoles.ids;

export const getUserRoles =
  createSelector(getUserRolesEntities, getUserRolesIds, (entities, ids) => ids.map((id) => entities[id]));

export function getUserRoleById(id: string) {
  return (state: any) => state.UserRoles.entities[id];
}

export function getUserRolesById(ids: string[]) {
  return createSelector(getUserRolesEntities, (entities) => ids.map((id) => entities[id]));
}
