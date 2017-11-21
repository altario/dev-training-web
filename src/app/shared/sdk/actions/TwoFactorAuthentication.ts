/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, TwoFactorAuthentication } from '../models';

export const TwoFactorAuthenticationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('TwoFactorAuthentication'), {
  VERIFY_TWO_FACTOR_AUTHENTICATION: type('[TwoFactorAuthentication] verifyTwoFactorAuthentication'),
  VERIFY_TWO_FACTOR_AUTHENTICATION_SUCCESS: type('[TwoFactorAuthentication] verifyTwoFactorAuthentication success'),
  VERIFY_TWO_FACTOR_AUTHENTICATION_FAIL: type('[TwoFactorAuthentication] verifyTwoFactorAuthentication fail'),

  GET_TWOFACTORAUTHENTICATION: type('[TwoFactorAuthentication] getTwoFactorAuthentication'),
  GET_TWOFACTORAUTHENTICATION_SUCCESS: type('[TwoFactorAuthentication] getTwoFactorAuthentication success'),
  GET_TWOFACTORAUTHENTICATION_FAIL: type('[TwoFactorAuthentication] getTwoFactorAuthentication fail'),

  GET_USER: type('[TwoFactorAuthentication] getUser'),
  GET_USER_SUCCESS: type('[TwoFactorAuthentication] getUser success'),
  GET_USER_FAIL: type('[TwoFactorAuthentication] getUser fail'),

});
export const TwoFactorAuthenticationActions =
Object.assign(BaseLoopbackActionsFactory<TwoFactorAuthentication>(TwoFactorAuthenticationActionTypes), {

  /**
   * verifyTwoFactorAuthentication Action.
   * Verify a two-factor-authentication token
   *
   * @param {any} id TwoFactorAuthentication id
   * @param {string} token 
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthentication: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION;
      public payload: {id: any, token: any};

    constructor(id: any, token: any, customHeaders?: Function, public meta?: any) {
      this.payload = {id, token};
    }
  },
  /**
   * verifyTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * This method returns no data.
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION_SUCCESS;
      public payload: {id: any, fk: any};

    constructor(id: any, fk: any, public meta?: any) {
      this.payload = {id, fk};
    }
  },
  /**
   * verifyTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  verifyTwoFactorAuthenticationFail: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.VERIFY_TWO_FACTOR_AUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getTwoFactorAuthentication Action.
   * Fetches belongsTo relation twoFactorAuthentication.
   *
   * @param {any} id TwoFactorAuthentication id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthentication: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_TWOFACTORAUTHENTICATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getTwoFactorAuthenticationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthenticationSuccess: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_TWOFACTORAUTHENTICATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getTwoFactorAuthenticationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getTwoFactorAuthenticationFail: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_TWOFACTORAUTHENTICATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id TwoFactorAuthentication id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_USER;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getUserSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getUserSuccess: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_USER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getUserFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getUserFail: class implements Action {
    public readonly type = TwoFactorAuthenticationActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});