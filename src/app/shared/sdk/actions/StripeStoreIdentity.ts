/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, StripeStoreIdentity } from '../models';

export const StripeStoreIdentityActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('StripeStoreIdentity'), {
});
export const StripeStoreIdentityActions =
Object.assign(BaseLoopbackActionsFactory<StripeStoreIdentity>(StripeStoreIdentityActionTypes), {
});