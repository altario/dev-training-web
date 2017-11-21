/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, UserProduct } from '../models';

export const UserProductActionTypes = Object.assign(BaseLoopbackActionTypesFactory('UserProduct'));

export const UserProductActions = Object.assign(BaseLoopbackActionsFactory<UserProduct>(UserProductActionTypes));
