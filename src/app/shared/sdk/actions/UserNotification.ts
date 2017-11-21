/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, UserNotification } from '../models';

export const UserNotificationActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('UserNotification'), {
  GET_USER: type('[UserNotification] getUser'),
  GET_USER_SUCCESS: type('[UserNotification] getUser success'),
  GET_USER_FAIL: type('[UserNotification] getUser fail'),

  GET_ORGANIZATION: type('[UserNotification] getOrganization'),
  GET_ORGANIZATION_SUCCESS: type('[UserNotification] getOrganization success'),
  GET_ORGANIZATION_FAIL: type('[UserNotification] getOrganization fail'),

});
export const UserNotificationActions =
Object.assign(BaseLoopbackActionsFactory<UserNotification>(UserNotificationActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id UserNotification id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = UserNotificationActionTypes.GET_USER;
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
    public readonly type = UserNotificationActionTypes.GET_USER_SUCCESS;
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
    public readonly type = UserNotificationActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getOrganization Action.
   * Fetches belongsTo relation organization.
   *
   * @param {any} id UserNotification id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getOrganization: class implements Action {
    public readonly type = UserNotificationActionTypes.GET_ORGANIZATION;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getOrganizationSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getOrganizationSuccess: class implements Action {
    public readonly type = UserNotificationActionTypes.GET_ORGANIZATION_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getOrganizationFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getOrganizationFail: class implements Action {
    public readonly type = UserNotificationActionTypes.GET_ORGANIZATION_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});