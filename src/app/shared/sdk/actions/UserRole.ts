/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, UserRole } from '../models';

export const UserRoleActionTypes = Object.assign(BaseLoopbackActionTypesFactory('UserRole'));

export const UserRoleActions = Object.assign(BaseLoopbackActionsFactory<UserRole>(UserRoleActionTypes));
