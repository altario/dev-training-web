/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, StripeSource } from '../models';

export const StripeSourceActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('StripeSource'), {
});
export const StripeSourceActions =
Object.assign(BaseLoopbackActionsFactory<StripeSource>(StripeSourceActionTypes), {
});