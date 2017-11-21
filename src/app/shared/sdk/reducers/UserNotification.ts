/* tslint:disable */
import { Action, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseReducerFactory } from './base';
import { UserNotification, UserNotificationInterface } from '../models';
import { LoopbackAction } from '../models/BaseModels';
import { UserNotificationActionTypes } from '../actions';

export interface UserNotificationsState extends EntityState<UserNotification | UserNotificationInterface> {};

export const UserNotificationAdapter: EntityAdapter<UserNotification | UserNotificationInterface> = createEntityAdapter<UserNotification | UserNotificationInterface>();

const initialState: UserNotificationsState = UserNotificationAdapter.getInitialState({});

const cases = BaseReducerFactory<UserNotificationsState, UserNotification | UserNotificationInterface>(UserNotificationActionTypes, UserNotificationAdapter);

/**
 * @module UserNotificationsReducer
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Provides with a LoopBack compatible UserNotification reducer.
 */
export function UserNotificationsReducer(state = initialState, action: LoopbackAction): UserNotificationsState {
  if (cases[action.type]) {
    return cases[action.type](state, action);
  } else {
    return state;
  }
}

export const getUserNotificationsState = (state: any) => state.UserNotifications;
export const getUserNotificationsEntities = (state: any) => state.UserNotifications.entities;
export const getUserNotificationsIds = (state: any) => state.UserNotifications.ids;

export const getUserNotifications =
  createSelector(getUserNotificationsEntities, getUserNotificationsIds, (entities, ids) => ids.map((id) => entities[id]));

export function getUserNotificationById(id: string) {
  return (state: any) => state.UserNotifications.entities[id];
}

export function getUserNotificationsById(ids: string[]) {
  return createSelector(getUserNotificationsEntities, (entities) => ids.map((id) => entities[id]));
}
