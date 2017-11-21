/* tslint:disable */
import { Action } from '@ngrx/store';
import { type } from '../util';
import { BaseLoopbackActionTypesFactory, BaseLoopbackActionsFactory } from './base';
import { LoopBackFilter, SDKToken, Follow } from '../models';

export const FollowActionTypes =
Object.assign(BaseLoopbackActionTypesFactory('Follow'), {
  GET_USER: type('[Follow] getUser'),
  GET_USER_SUCCESS: type('[Follow] getUser success'),
  GET_USER_FAIL: type('[Follow] getUser fail'),

  GET_FOLLOWEE: type('[Follow] getFollowee'),
  GET_FOLLOWEE_SUCCESS: type('[Follow] getFollowee success'),
  GET_FOLLOWEE_FAIL: type('[Follow] getFollowee fail'),

});
export const FollowActions =
Object.assign(BaseLoopbackActionsFactory<Follow>(FollowActionTypes), {

  /**
   * getUser Action.
   * Fetches belongsTo relation user.
   *
   * @param {any} id Follow id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getUser: class implements Action {
    public readonly type = FollowActionTypes.GET_USER;
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
    public readonly type = FollowActionTypes.GET_USER_SUCCESS;
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
    public readonly type = FollowActionTypes.GET_USER_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },

  /**
   * getFollowee Action.
   * Fetches belongsTo relation followee.
   *
   * @param {any} id Follow id
   * @param {boolean} refresh 
   * @param {any} meta (optional).
   * 
   */
  getFollowee: class implements Action {
    public readonly type = FollowActionTypes.GET_FOLLOWEE;
      public payload: {id: any, refresh: any};

    constructor(id: any, refresh: any = {}, customHeaders?: Function, public meta?: any) {
      this.payload = {id, refresh};
    }
  },
  /**
   * getFolloweeSuccess Action.
   * 
   * @param {any} id 
   * @param {object} data 
   * @param {any} meta (optional).
   * 
   */
  getFolloweeSuccess: class implements Action {
    public readonly type = FollowActionTypes.GET_FOLLOWEE_SUCCESS;
      public payload: {id: any, data: any};

    constructor(id: any, data: any, public meta?: any) {
      this.payload = {id, data};
    }
  },
  /**
   * getFolloweeFail Action.
   *
   * @param {any} payload
   * @param {any} meta (optional).
   * 
   */
  getFolloweeFail: class implements Action {
    public readonly type = FollowActionTypes.GET_FOLLOWEE_FAIL;

    constructor(public payload: any, public meta?: any) { }
  },
});