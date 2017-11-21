/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, StripeCustomer } from '../models';

export const StripeCustomerActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('StripeCustomer'), {
});
export const StripeCustomerActions =
Object.assign(BaseLoopbackActionsFactory<StripeCustomer>(StripeCustomerActionTypes), {
});