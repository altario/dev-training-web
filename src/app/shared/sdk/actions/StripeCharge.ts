/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, StripeCharge } from '../models';

export const StripeChargeActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('StripeCharge'), {
  GET_STRIPESOURCE: type('[StripeCharge] getStripeSource'),
  GET_STRIPESOURCE_SUCCESS: type('[StripeCharge] getStripeSource success'),
  GET_STRIPESOURCE_FAIL: type('[StripeCharge] getStripeSource fail'),

});
export const StripeChargeActions =
Object.assign(BaseLoopbackActionsFactory<StripeCharge>(StripeChargeActionTypes), {

  /**
   * getStripeSource Action.
   * Fetches belongsTo relation stripeSource.
   *
   * @param {any} id StripeCharge id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getStripeSource: class implements Action {
    public readonly type = StripeChargeActionTypes.GET_STRIPESOURCE;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getStripeSourceSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getStripeSourceSuccess: class implements Action {
    public readonly type = StripeChargeActionTypes.GET_STRIPESOURCE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getStripeSourceFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getStripeSourceFail: class implements Action {
    public readonly type = StripeChargeActionTypes.GET_STRIPESOURCE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});