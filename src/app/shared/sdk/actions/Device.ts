/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Device } from '../models';

export const DeviceActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Device'), {
  FIND_BY_APP: type('[Device] findByApp'),
  FIND_BY_APP_SUCCESS: type('[Device] findByApp success'),
  FIND_BY_APP_FAIL: type('[Device] findByApp fail'),

  FIND_BY_USER: type('[Device] findByUser'),
  FIND_BY_USER_SUCCESS: type('[Device] findByUser success'),
  FIND_BY_USER_FAIL: type('[Device] findByUser fail'),

  FIND_BY_SUBSCRIPTIONS: type('[Device] findBySubscriptions'),
  FIND_BY_SUBSCRIPTIONS_SUCCESS: type('[Device] findBySubscriptions success'),
  FIND_BY_SUBSCRIPTIONS_FAIL: type('[Device] findBySubscriptions fail'),

  GET_USER: type('[Device] getUser'),
  GET_USER_SUCCESS: type('[Device] getUser success'),
  GET_USER_FAIL: type('[Device] getUser fail'),

});
export const DeviceActions =
Object.assign(BaseLoopbackActionsFactory<Device>(DeviceActionTypes), {

  /**
   * findByApp Action.
   * Find installations by application id
   *
   * @param {string} deviceType Device type
   * @param {string} appId Application id
   * @param {string} appVersion Application version
   * @param {any} meta (optional).
   * 
   */
  findByApp: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_APP;
      public payload: {deviceType: any, appId: any, appVersion: any};

    constructor(deviceType: any = {}, appId: any = {}, appVersion: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {deviceType, appId, appVersion};
    }
  },
  /**
   * findByAppSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByAppSuccess: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_APP_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByAppFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByAppFail: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_APP_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findByUser Action.
   * Find installations by user id
   *
   * @param {string} deviceType Device type
   * @param {string} userId User id
   * @param {any} meta (optional).
   * 
   */
  findByUser: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_USER;
      public payload: {deviceType: any, userId: any};

    constructor(deviceType: any = {}, userId: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {deviceType, userId};
    }
  },
  /**
   * findByUserSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findByUserSuccess: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_USER_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findByUserFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findByUserFail: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * findBySubscriptions Action.
   * Find installations by subscriptions
   *
   * @param {string} deviceType Device type
   * @param {string} subscriptions Subscriptions
   * @param {any} meta (optional).
   * 
   */
  findBySubscriptions: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_SUBSCRIPTIONS;
      public payload: {deviceType: any, subscriptions: any};

    constructor(deviceType: any = {}, subscriptions: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {deviceType, subscriptions};
    }
  },
  /**
   * findBySubscriptionsSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  findBySubscriptionsSuccess: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_SUBSCRIPTIONS_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * findBySubscriptionsFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  findBySubscriptionsFail: class implements Action {
    public readonly type = DeviceActionTypes.FIND_BY_SUBSCRIPTIONS_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Device id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = DeviceActionTypes.GET_USER;
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
    public readonly type = DeviceActionTypes.GET_USER_SUCCESS;
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
    public readonly type = DeviceActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});